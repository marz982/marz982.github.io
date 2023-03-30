
var menu_visible =false;
let menu = document.getElementById("nav")
function mostraOcultarMenu (){
    if (menu-visible==false){
        menu.style.display="block";
        menu_visible= true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
function crearBarra(id_barra){
  for (i=0;i<=4;i++){
    let div = document.createElement("div");
    div.className = "e";
    id-id_barra.appendChild(div);
 }   
}
let html = document.getElementById("html");
crearBarra(html);
let javascript =document.getElementById("javascript");
crearBarra(javascript);

document.getElementById( "boton").onclick =function () {
    document.body.style.backgroundColor = "white"
};
document.addEventListener("click", function(){
    console.log("hola mundo!")
    
})

