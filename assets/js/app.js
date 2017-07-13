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

getJSON("data/earth-like-results.json")
  .then(function(mensaje){return(getJSON(mensaje.results[0]))})
  .then(function(resultado){console.log(resultado)})
