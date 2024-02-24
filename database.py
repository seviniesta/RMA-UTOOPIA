from pymongo import MongoClient 
import certifi

MONGO_URI = 'mongodb+srv://seviniesta:mmaguisevi@cluster0.kzy8ok0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


ca = certifi.where()

def dbConnection():
    try:
        client = MongoClient(MONGO_URI, tlsCAFile=ca)
        db = client["db_clientes"]
    except ConnectionError:
        print("Error de conexion a la bdd")
    return db














































