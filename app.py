from flask import Flask, render_template,request, Response,jsonify, redirect, url_for
import database as dbase
from clientes import Clientes

db=dbase.dbConnection()

app=Flask(__name__)

# Rutas de la aplicación.

@app.route('/')

def home():

    cliente=db['clientes']
    devuelve_todos_los_Clientes=cliente.find()
  
  

    return render_template('index.html',cliente=devuelve_todos_los_Clientes)

#Metodo Post Insertar

@app.route('/clientes', methods=['POST'])

def addClientes():

    cliente=db['clientes']
    nombre=request.form['nombre']
    contacto=request.form['contacto']
    rol=request.form['rol']

    if nombre and contacto and rol:
        nuevo_cliente = Clientes(nombre, contacto, rol)  
        cliente.insert_one(nuevo_cliente.toDBcollection())
        response=jsonify({
                            'nombre':nombre,
                            'contacto':contacto,
                             'rol':rol
                    })
           
        return redirect(url_for('home'))
    else:
        return notFound()
    
#Metodo Borrar

@app.route('/delete/<string:nombre_cliente>')

def delete(nombre_cliente):
    cliente=db['clientes']
    cliente.delete_one({'nombre':nombre_cliente})
    return redirect(url_for('home'))


#Metodo Editar o put

@app.route('/editar/<string:nombre_cliente>',methods=['POST'])

def editar(nombre_cliente):

    cliente=db['clientes']
    nombre=request.form['nombre']
    contacto=request.form['contacto']
    rol=request.form['rol']

    if nombre and contacto and rol:
        cliente.update_one({'nombre':nombre_cliente}, {'$set':{'nombre':nombre, 'contacto':contacto,'rol':rol}})
        response=jsonify({'menssage':'Actualizado Cliente'+nombre_cliente})
        return redirect(url_for('home'))
    else:
        return notFound()

#=================================== HASTA AQUI

   
@app.errorhandler(404)
def notFound(error=None):
     menssage  ={
           'menssage':'No encontrado'+ request.url,
           'status':'404 no encontrada'
        }
     response=jsonify(menssage)
     response.status_code=404
     return response



if __name__ == '__main__':
     app.run(debug=True, host='0.0.0.0', port=4000)