
// $video = document.querySelector('.video-container');
function accionSi(){
    const respuesta = confirm("¿Estás segura que quieres ser mi esposa?");
    if(respuesta){
        //Redirecciona a la pagina que responido si
        window.location.href ="opcionsi.html";

    }
    else{
        alert("Espero que puedas reconsiderarlo 😔");
    }
}

function mueveElBoton(){
    const width = window.innerWidth;
    const heigth = window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeigth = Math.random() * heigth;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position ="absolute";
    btnNo.style.left = newWidth + "px";
    btnNo.style.top = newHeigth + "px";

}