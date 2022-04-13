import datetime

from flask import Flask, render_template, flash, redirect, url_for, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy_serializer import SerializerMixin
from config import DevConfig

app = Flask(__name__)
CORS(app)
app.config.from_object(DevConfig)
db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Product(db.Model, SerializerMixin):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(255))
    ingredients = db.relationship(
        'Ingredient',
        backref='product',
        lazy='dynamic'
    )

    def __init__(self, name=""):
        self.name = name

    def __repr__(self):
        return '<Product {}>'.format(self.name)


class Ingredient(db.Model, SerializerMixin):
    id = db.Column(db.Integer(), primary_key=True)
    ingredient = db.Column(db.String(255))
    product_id = db.Column(db.Integer(), db.ForeignKey('product.id'))

    # serialize_rules = ('-product')
    serialize_only = ('id', 'ingredient')

    def __init__(self, ingredient=""):
        self.ingredient = ingredient

    def __repr__(self):
        return "<Ingredient '{}'>".format(self.ingredient)


@app.route('/product')
def product():
    products = Product.query.all()

    return jsonify([product.to_dict() for product in products])

@app.route('/product', methods=['POST'])
def addProduct(ingredients=None):
    data = request.json
    product = Product(data['name'])
    product.ingredients = [Ingredient(ingredient) for ingredient in data['ingredients']]
    db.session.add(product)
    db.session.commit()
    return ('', 201)


if __name__ == '__main__':
    app.run()
