function getJSON(url2){
  return new Promise(function(resolve, reject){
    var ajax = new XMLHttpRequest();
    var url = url2;
    ajax.open("GET", url); //prepara el url de la var ajax con el metodo get
    ajax.send(); //manda peticion get al servidor

    ajax.onreadystatechange = function (data){
      if(ajax.readyState == 4){
        // console.log(ajax.responseText)
        resolve(JSON.parse(ajax.responseText));
      }
    }
  });
}

var arregloPlanetas = [];
  getJSON("data/earth-like-results.json").then(function(respuesta){

    for(var i = 0; i < respuesta.results.length ; i++){
      arregloPlanetas.push(getJSON(respuesta.results[i]));
      arregloPlanetas[i].then(function(planeta){
        console.log(planeta);
        obtenerDatos(planeta);
      });
    }
  });

  var obtenerDatos = function(planeta){
    var nombre = planeta.pl_name;
    var telescope = planeta.pl_telescope;
    var masa = planeta.pl_masse;
    var fecha = planeta.pl_disc;
  }

var crearPlaneta = function(planeta){
  obtenerDatos();

  console.log("hola");

  //crear tarjeta
  var contenedorTarjetas = document.getElementById("contenedor-tarjetas");
  var row = document.createElement("div");
  var col_s12 = document.createElement("div");
  var card = document.createElement("div");
  var card_image = document.createElement("div");
  var card__image_image = document.createElement("img");
  var card_content = document.createElement("div");
  var card__content_title = document.createElement("span");
  var card__content_parrafo = document.createElement("p");

  contenedorTarjetas.setAttribute("class", "center-align");
  row.setAttribute("class", "row");
  col_s12.setAttribute("class", "col s12 m7");
  card.setAttribute("class", "card");
  card_image.setAttribute("class", "card-image");
  card__image_image.setAttribute("src", "http://www.dummyimage.com/300x300");
  card_content.setAttribute("class", "card_content");
  card__content_title.setAttribute("class", "card-title");

  //contenido
  card__content_title.innerHTML = nombre;
  card__content_parrafo.innerHTML = "Fecha de descubrimiento:" + fecha +
                                    "<br> Telescope:" + telescope +
                                    "<br> Masa:" + masa +
                                    "<br> Descubrimiento:" + fecha;

  card_content.appendChild(card_content_parrafo);
  card_content.appendChild(card__content_title);
  card_image.appendChild(card_image_image);
  card.appendChild(card_image);
  card.appendChild(card_content);
  col.appendChild(card);
  contenedorTarjetas.appendChild(col);

}
