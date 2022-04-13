class Config(object):
    POSTS_PER_PAGE = 10


class ProdConfig(Config):
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = "postgresql+psycopg2://angel:pass@localhost:5432/product_information"


class DevConfig(Config):
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    SQLALCHEMY_DATABASE_URI = "postgresql+psycopg2://angel:pass@localhost:5432/product_information"
