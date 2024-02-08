function obtenerDiaSemana(dia, mes, ano) {
    let fecha = new Date(ano, mes, dia);
    let numeroDiaSemana = fecha.getDay();
    let nombresDias = ["D", "L", "M", "X", "J", "V", "S"];
    return nombresDias[numeroDiaSemana];
  }

  function marcarDiaActual() {
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth() + 1;
    const anoActual = fechaActual.getFullYear();
    const idElemento = `cal_${diaActual}_${mesActual - 1}_${anoActual}`;
    const elemento = document.getElementById(idElemento);

    if (elemento) {
      elemento.style.backgroundColor = "black";
      elemento.style.color = "white";
      elemento.nextElementSibling.style.backgroundColor = "black";
      elemento.nextElementSibling.style.color = "white";
    } else {
      console.error(`El elemento con ID '${idElemento}' no fue encontrado.`);
    }
  }



document.addEventListener('DOMContentLoaded', function () {

  
    function add_line(titulo, ano, mes) {
      mes--;
  
      let contenedorPrincipal = document.getElementById("contenedor_calendario");
  
      let TituloAno = document.getElementById("TituloAno");
      TituloAno.innerHTML = ano;
  
      let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
      let container = document.createElement('div');
      container.className = 'container';
  
      if (!contenedorPrincipal) {
        console.error("No se encontró el elemento 'body'");
        return;
      }
  
      contenedorPrincipal.appendChild(container);
  
      let diviciones = (new Date(ano, mes + 1, 0)).getDate();
  
      let descripcion = document.createElement('div');
      descripcion.className = 'titulo';
      descripcion.textContent = titulo;
      container.appendChild(descripcion);
  
      container.style.setProperty('--diviciones', diviciones);
  
      for (let i = 1; i <= diviciones; i++) {
        let contenido_cal;
  
        if (titulo === ano) {
          contenido_cal = `<p id="cal_${i}_${mes}_${ano}" style="padding:0; margin:0;"><b>${obtenerDiaSemana(i, mes, ano)}</b></p><p style="padding:0; margin:0;">${i}</p>`;
          descripcion.textContent = meses[mes];
          document.querySelector('.titulo').style.backgroundColor = "black";
          document.querySelector('.titulo').style.color = "white";
        } else {
          contenido_cal = `<p style="padding:0; margin:0;"  id="${titulo}_${i}_${mes}_${ano}"  >&nbsp;</p>`;
        }
  
        let dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerHTML = contenido_cal;
        container.appendChild(dayDiv);
      }
  
      marcarDiaActual();
    }
  
    add_line(2024, 2024, 2);
    add_line('Pagos', 2024, 2);
    add_line('Casa', 2024, 2);
    add_line('Po_Guill', 2024, 2);
  });
  


  //document.addEventListener('click',function(event){ alert(event.target.id);})



  //========================== VENTANA EMERGENTE

  var miVentana = document.getElementById("miVentana");
var miDiv = document.getElementById("miDiv");

miDiv.onclick = function() {
  miVentana.style.display = "block";
}

function cerrarVentana() {
  miVentana.style.display = "none";
}