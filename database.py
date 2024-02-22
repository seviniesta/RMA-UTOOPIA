from pymongo import MongoClient 
import certifi

MONGO_URI = 'mongodb+srv://sevi:mmaguisevi@cluster0.ams3u.mongodb.net/?retryWrites=true&w=majority'

ca = certifi.where()

def dbConnection():
    try:
        client = MongoClient(MONGO_URI, tlsCAFile=ca)
        db = client["db_clientes"]
    except ConnectionError:
        print("Error de conexion a la bdd")
    return db














































