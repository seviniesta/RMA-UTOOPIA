






class Pantalla {



#contenidoPantalla={

  pieBotonPersonal:()=>{ 
   
    document.getElementById("pantalla").innerHTML="<H5>Listas personales</h5>";
  }
  ,//pieBotonPersonal
  pieBotonGrupo:()=>{ 
    document.getElementById("pantalla").innerHTML="<H5>Listas Grupales</h5>";

  }
  
  ,//pieBotonGrupo
  pieBotonMensaje:()=>{ 
    document.getElementById("pantalla").innerHTML="<H5>Mensajes</h5>";

  }
  ,//mensaje
  pieBotonConfiguracion:()=>{ 
    document.getElementById("pantalla").innerHTML="<H5>Configuración</h5>";

  }
}//Valor contenidoPantalla



  constructor() {
    this._pantalla = Pantalla;
    this.#detectaId();  // Llamada al método privado
  }

  #detectaId() {  
    document.addEventListener('DOMContentLoaded', (event) => {
      document.addEventListener('click', (event) => {
        const clickedElement = event.target;  // Elemento que fue clicado
        if (clickedElement.id) {  // Comprobar si tiene un ID
         // alert(`Elemento clicado con ID: ${clickedElement.id}`);
          //return clickedElement.id;

         return this.#contenidoPantalla[clickedElement.id](); // llama a la variable privada que es un objeto literal
                                }
                                                     });
                                                               });
              }//  // Método privado #detectaId

         



}// Clase Pantalla





// Instancia de la clase para que el constructor se ejecute
const pantalla = new Pantalla();




// Variables

var codigoPaisTel = [
  {
    "nombre": "Alemania",
    "codigo": "DE",
    "indicativo": "0049"
  },
  {
    "nombre": "Arabia Saudita",
    "codigo": "SA",
    "indicativo": "00966"
  },
  {
    "nombre": "Argelia",
    "codigo": "DZ",
    "indicativo": "00213"
  },
  {
    "nombre": "Argentina",
    "codigo": "AR",
    "indicativo": "0054"
  },
  {
    "nombre": "Australia",
    "codigo": "AU",
    "indicativo": "0061"
  },
  {
    "nombre": "Bahrein",
    "codigo": "BH",
    "indicativo": "00973"
  },
  {
    "nombre": "Bangladés",
    "codigo": "BD",
    "indicativo": "00880"
  },
  {
    "nombre": "Bélgica",
    "codigo": "BE",
    "indicativo": "0032"
  },
  {
    "nombre": "Bolivia",
    "codigo": "BO",
    "indicativo": "00591"
  },
  {
    "nombre": "Brasil",
    "codigo": "BR",
    "indicativo": "0055"
  },
  {
    "nombre": "Camerún",
    "codigo": "CM",
    "indicativo": "00237"
  },
  {
    "nombre": "Canadá",
    "codigo": "CA",
    "indicativo": "001"
  },
  {
    "nombre": "Catar",
    "codigo": "QA",
    "indicativo": "00974"
  },
  {
    "nombre": "Chile",
    "codigo": "CL",
    "indicativo": "0056"
  },
  {
    "nombre": "China",
    "codigo": "CN",
    "indicativo": "0086"
  },
  {
    "nombre": "Colombia",
    "codigo": "CO",
    "indicativo": "0057"
  },
  {
    "nombre": "Corea del Sur",
    "codigo": "KR",
    "indicativo": "0082"
  },
  {
    "nombre": "Costa de Marfil",
    "codigo": "CI",
    "indicativo": "00225"
  },
  {
    "nombre": "Costa Rica",
    "codigo": "CR",
    "indicativo": "00506"
  },
  {
    "nombre": "Cuba",
    "codigo": "CU",
    "indicativo": "0053"
  },
  {
    "nombre": "Ecuador",
    "codigo": "EC",
    "indicativo": "00593"
  },
  {
    "nombre": "Egipto",
    "codigo": "EG",
    "indicativo": "0020"
  },
  {
    "nombre": "Emiratos Árabes Unidos",
    "codigo": "AE",
    "indicativo": "00971"
  },
  {
    "nombre": "España",
    "codigo": "ES",
    "indicativo": "0034"
  },
  {
    "nombre": "Estados Unidos",
    "codigo": "US",
    "indicativo": "001"
  },
  {
    "nombre": "Fiji",
    "codigo": "FJ",
    "indicativo": "00679"
  },
  {
    "nombre": "Filipinas",
    "codigo": "PH",
    "indicativo": "0063"
  },
  {
    "nombre": "Francia",
    "codigo": "FR",
    "indicativo": "0033"
  },
  {
    "nombre": "Ghana",
    "codigo": "GH",
    "indicativo": "00233"
  },
  {
    "nombre": "Grecia",
    "codigo": "GR",
    "indicativo": "0030"
  },
  {
    "nombre": "India",
    "codigo": "IN",
    "indicativo": "0091"
  },
  {
    "nombre": "Indonesia",
    "codigo": "ID",
    "indicativo": "0062"
  },
  {
    "nombre": "Irán",
    "codigo": "IR",
    "indicativo": "0098"
  },
  {
    "nombre": "Iraq",
    "codigo": "IQ",
    "indicativo": "00964"
  },
  {
    "nombre": "Israel",
    "codigo": "IL",
    "indicativo": "00972"
  },
  {
    "nombre": "Italia",
    "codigo": "IT",
    "indicativo": "0039"
  },
  {
    "nombre": "Japón",
    "codigo": "JP",
    "indicativo": "0081"
  },
  {
    "nombre": "Jordania",
    "codigo": "JO",
    "indicativo": "00962"
  },
  {
    "nombre": "Kenia",
    "codigo": "KE",
    "indicativo": "00254"
  },
  {
    "nombre": "Kuwait",
    "codigo": "KW",
    "indicativo": "00965"
  },
  {
    "nombre": "Líbano",
    "codigo": "LB",
    "indicativo": "00961"
  },
  {
    "nombre": "Libia",
    "codigo": "LY",
    "indicativo": "00218"
  },
  {
    "nombre": "Malasia",
    "codigo": "MY",
    "indicativo": "0060"
  },
  {
    "nombre": "Marruecos",
    "codigo": "MA",
    "indicativo": "00212"
  },
  {
    "nombre": "México",
    "codigo": "MX",
    "indicativo": "0052"
  },
  {
    "nombre": "Nigeria",
    "codigo": "NG",
    "indicativo": "00234"
  },
  {
    "nombre": "Noruega",
    "codigo": "NO",
    "indicativo": "0047"
  },
  {
    "nombre": "Nueva Zelanda",
    "codigo": "NZ",
    "indicativo": "0064"
  },
  {
    "nombre": "Omán",
    "codigo": "OM",
    "indicativo": "00968"
  },
  {
    "nombre": "Países Bajos",
    "codigo": "NL",
    "indicativo": "0031"
  },
  {
    "nombre": "Pakistán",
    "codigo": "PK",
    "indicativo": "0092"
  },
  {
    "nombre": "Panamá",
    "codigo": "PA",
    "indicativo": "00507"
  },
  {
    "nombre": "Papúa Nueva Guinea",
    "codigo": "PG",
    "indicativo": "00675"
  },
  {
    "nombre": "Perú",
    "codigo": "PE",
    "indicativo": "0051"
  },
  {
    "nombre": "Polonia",
    "codigo": "PL",
    "indicativo": "0048"
  },
  {
    "nombre": "Portugal",
    "codigo": "PT",
    "indicativo": "00351"
  },
  {
    "nombre": "Reino Unido",
    "codigo": "GB",
    "indicativo": "0044"
  },
  {
    "nombre": "Rumania",
    "codigo": "RO",
    "indicativo": "0040"
  },
  {
    "nombre": "Rusia",
    "codigo": "RU",
    "indicativo": "0007"
  },
  {
    "nombre": "Senegal",
    "codigo": "SN",
    "indicativo": "00221"
  },
  {
    "nombre": "Singapur",
    "codigo": "SG",
    "indicativo": "0065"
  },
  {
    "nombre": "Sudáfrica",
    "codigo": "ZA",
    "indicativo": "0027"
  },
  {
    "nombre": "Sudán",
    "codigo": "SD",
    "indicativo": "00249"
  },
  {
    "nombre": "Suecia",
    "codigo": "SE",
    "indicativo": "0046"
  },
  {
    "nombre": "Tailandia",
    "codigo": "TH",
    "indicativo": "0066"
  },
  {
    "nombre": "Tanzania",
    "codigo": "TZ",
    "indicativo": "00255"
  },
  {
    "nombre": "Tonga",
    "codigo": "TO",
    "indicativo": "00676"
  },
  {
    "nombre": "Túnez",
    "codigo": "TN",
    "indicativo": "00216"
  },
  {
    "nombre": "Turquía",
    "codigo": "TR",
    "indicativo": "0090"
  },
  {
    "nombre": "Ucrania",
    "codigo": "UA",
    "indicativo": "00380"
  },
  {
    "nombre": "Uganda",
    "codigo": "UG",
    "indicativo": "00256"
  },
  {
    "nombre": "Uruguay",
    "codigo": "UY",
    "indicativo": "00598"
  },
  {
    "nombre": "Venezuela",
    "codigo": "VE",
    "indicativo": "0058"
  },
  {
    "nombre": "Vietnam",
    "codigo": "VN",
    "indicativo": "0084"
  },
  {
    "nombre": "Yemen",
    "codigo": "YE",
    "indicativo": "00967"
  }
];





//Funciones Genericas

const muestra_esconde = (id) => {

  var element = document.getElementById(id);
  if (element.style.display === "none") {
    // Si el elemento está oculto, mostrarlo
    element.style.display = "flex";
  } else {
    // Si el elemento está visible, ocultarlo
    element.style.display = "none";
  }


}


// Función para detectar el código de país basado en la ubicación del usuario
function detectarCodigoPais() {
  // Haces una llamada a un servicio de geolocalización para obtener el país del usuario
  // Aquí puedes usar una API de geolocalización como GeoJS
  let codigo







  let CodigoTelefono = 0;


  fetch('https://get.geojs.io/v1/ip/geo.json')
    .then(response => response.json())
    .then(data => {
      // Extraes el código de país de la respuesta
      const codigoPais = data.country_code;

      // Buscamos en el array el valor del indicativo para ponerlo automaticamente en el indicativo de teléfono

      for (let i = 0; i < codigoPaisTel.length; i++) {
        if (codigoPaisTel[i].codigo == codigoPais) {
          CodigoTelefono = codigoPaisTel[i].indicativo;

        }

      }


      // Asignas el código de país al input oculto
      document.getElementById('telefono').value = CodigoTelefono;
    })
    .catch(error => {
      console.error('Error al detectar el país:', error);
      // En caso de error, puedes dejar el campo de código de país vacío o mostrar un mensaje de error al usuario
    });
}

// Llamas a la función para que se ejecute cuando la página cargue
window.onload = detectarCodigoPais;
