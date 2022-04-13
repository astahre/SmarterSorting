# Products and Ingredients

A simple app for storing products and ingredients and displaying the products and ingredients

## Create and activate virtual environment

```bash
#create the environment
python3 -m venv venv

source venv/bin/activate
```
## Installation of Postgres database

```bash
#create the database
create database product_information with owner <owner>

#update the SQLALCHEMY_DATABASE_URI in config.py to use owner's user name and password

export FLASK_APP=manage.py

flask shell

>>> db.create_all()
```

## Running the application

```bash
#Change to the backend directory
cd backend
flask run

#Change to the frontend directory
cd ../frontend
npm run

```

## Using the application
#Add Products

http://localhost:3000/addProduct

#Product List

http://localhost:3000/productList