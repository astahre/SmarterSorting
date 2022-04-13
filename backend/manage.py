from main import app, db, Product, Ingredient, migrate


@app.shell_context_processor
def make_shell_context():
    return dict(app=app, db=db, Product=Product, Ingredient=Ingredient, migrate=migrate)
