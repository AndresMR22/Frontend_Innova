document.getElementById("button-up").addEventListener("click",scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScroll > 0){
        window.scrollTo (0,0); //devuelve a cero el scroll vertical
  
    }
}


// Esconder el botonScroll
//guardamos el objeto boton
buttonUp = document.getElementById("button-up");
window.onscroll = function(){ //afectaremos la ventana de acuerdo al scroll
    var scroll = document.documentElement.scrollTop;
    //guardamos la pos del scroll
    if(scroll > 300){
        buttonUp.style.transform = "scale(1)";
    }else{
        buttonUp.style.transform = "scale(0)";
    }
}