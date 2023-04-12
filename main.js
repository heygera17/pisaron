mouse="empty";
var upositionx, upositiony;
canvas=document.getElementById("Mycanvas");
ctx=canvas.getContext("2d");
color="black";
anchodelinea=5;
a_pantalla=screen.width;
n_ancho_pantalla=screen.width - 70 ;
n_alto_pantalla = screen.height -30;

if(a_pantalla < 992){
    document.getElementById("Mycanvas").whidth =n_ancho_pantalla;
    document.getElementById("Mycanvas").height =n_alto_pantalla;
document.body.style.overflow = "hidden";
}
 
canvas.addEventListener("mousedown", My_mousedown);

function My_mousedown(e)

{



mouse = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);


function my_mousemove(e) {

posisionActualX = e.clientX-canvas.offsetLeft;

posisionActualY = e.clientY-canvas.offsetTop;

if (mouse == "mouseDown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = anchodelinea;
console.log("Ultima pocisión y coordenada=("+upositionx+","+upositiony);
ctx.moveTo(upositionx, upositiony);
ctx.lineTo(posisionActualX, posisionActualY);
ctx.stroke();

}
upositionx = posisionActualX;
upositiony = posisionActualY;

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouse = "mouseUP";
}
canvas.addEventListener("touchstart", my_touchestart);
function my_touchestart(e)
{
    console.log("my_touchstart");

 
  posisionActualX = e.touches [0].clientX-canvas.offsetLeft;
    posisionActualY = e.touches [0].clientY-canvas.olffsetTop;
   }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
        posisionActualX = e.touches [0].clientX-canvas.offsetLeft;
        posisionActualY = e.touches [0].clientY-canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = anchodelinea;

       console.log("Ultima pocision y coordenadas=");

       console .log("x =" + upositionx + "y = " + upositiony);

       ctx.moveTo(upositionx, upositiony);

       ctx.lineTo(posisionActualX, posisionActualY),
       ctx.stroke();

      upositionx = posisionActualX;
      upositiony = posisionActualY;
    }
