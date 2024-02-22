class Clientes:
    def __init__(self,nombre,contacto,rol):
                 self.nombre=nombre
                 self.contacto=contacto
                 self.rol=rol
   
    def toDBcollection(self):
            return{
                    
                    'nombre':self.nombre,
                    'contacto':self.contacto,
                     'rol':self.rol

                    }
    










































        