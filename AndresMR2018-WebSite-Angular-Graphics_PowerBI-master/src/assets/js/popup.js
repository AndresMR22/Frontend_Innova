
document.addEventListener("DOMContentLoaded",cargar);

function cargar(){
    var overlay = document.getElementById('overlay');
    var btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    //var btnClosePopup = document.getElementById('btn-cerrar-popup');
  overlay?.classList.add('active');
  console.log("bienvenida");


  btnCerrarPopup.addEventListener('click',function(e){
    e.preventDefault();
overlay.classList.remove('active');
console.log("cerrando");
})
}

// function cerrar(){
// var btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
// overlay = document.getElementById('overlay');



// }
    // var overlay = document.getElementById('overlay');
    // var btnClosePopup = document.getElementById('btn-cerrar-popup');
    // window.addEventListener('click',function(){
    //   overlay?.classList.remove('active');
    // })

  