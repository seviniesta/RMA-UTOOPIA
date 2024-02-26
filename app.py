from flask import Flask, render_template, request, jsonify, redirect, url_for
import database as dbase
from clientes import Clientes

db = dbase.dbConnection()

app = Flask(__name__)

# Rutas de la aplicación.

@app.route('/')
def home():
    return render_template('index.html')


# Método GET para obtener todos los clientes
@app.route('/clientes', methods=['GET'])
def getClientes():
    cliente = db['clientes']
    devuelve_todos_los_Clientes = cliente.find()
    clientes = []
    for c in devuelve_todos_los_Clientes:
        clientes.append({
            'nombre': c['nombre'],
            'contacto': c['contacto'],
            'rol': c['rol']
        })
    return jsonify({'clientes': clientes})


# Método POST para insertar un cliente
@app.route('/clientes', methods=['POST'])
def addClientes():
    cliente = db['clientes']
    nombre = request.form['nombre']
    contacto = request.form['contacto']
    rol = request.form['rol']

    if nombre and contacto and rol:
        nuevo_cliente = Clientes(nombre, contacto, rol)
        cliente.insert_one(nuevo_cliente.toDBcollection())
        return redirect(url_for('home'))
    else:
        return notFound()


# Método DELETE para eliminar un cliente
@app.route('/delete/<string:nombre_cliente>', methods=['DELETE'])
def delete(nombre_cliente):
    cliente = db['clientes']
    cliente.delete_one({'nombre': nombre_cliente})
    return jsonify({'message': 'Cliente eliminado exitosamente'})


# Método PUT para editar un cliente
@app.route('/editar/<string:nombre_cliente>', methods=['PUT'])
def editar(nombre_cliente):
    cliente = db['clientes']
    nombre = request.form['nombre']
    contacto = request.form['contacto']
    rol = request.form['rol']

    if nombre and contacto and rol:
        cliente.update_one({'nombre': nombre_cliente}, {'$set': {'nombre': nombre, 'contacto': contacto, 'rol': rol}})
        return jsonify({'message': 'Cliente actualizado exitosamente'})
    else:
        return notFound()


# Método GET para obtener un cliente por nombre
@app.route('/cliente/<string:nombre_cliente>', methods=['GET'])
def getCliente(nombre_cliente):
    cliente = db['clientes']
    cliente_buscar = cliente.find_one({'nombre': nombre_cliente})
    if cliente_buscar:
        return jsonify({
            'nombre': cliente_buscar['nombre'],
            'contacto': cliente_buscar['contacto'],
            'rol': cliente_buscar['rol']
        })
    else:
        return jsonify({'message': 'Cliente no encontrado'}), 404


@app.errorhandler(404)
def notFound(error=None):
    message = {
        'message': 'Not found: ' + request.url,
        'status': '404 not found'
    }
    return jsonify(message), 404


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)
