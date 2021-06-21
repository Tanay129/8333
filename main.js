canv= document.getElementById("myCanvas");
ctx=canv.getContext("2d");
var lastpositonX,lastpositonY;
var color="blue";
var width_of_line=2;
var mouse_event="empty";

canv.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouse_event="mouseDown";
}

canv.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseleave";
}

canv.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseUp";
}

canv.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentpositionX=e.clientX-canv.offsetLeft;
    currentpositionY=e.clientY-canv.offsetRight;

    
    if(mouse_event=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        ctx.moveTo(lastpositonX,lastpositonY);
        ctx.lineTo(currentpositionX,currentpositionY);
        ctx.stroke();
    }
lastpositonX=currentpositionX;
lastpositonY=currentpositionY;
}

var width=screen.width;
var new_width=screen.width-70;
var height=screen.height;
var new_height=screen.height-300;

if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
}

canv.addEventListener("touchStart",my_touchStart);
function my_touchStart(e){
    lastpositonX=e.touches[0].clientX-canv.offsetLeft;
    lastpositonY=e.touches[0].clientY-canv.offsetTop;
}

canv.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    currentpositionX=e.touches[0].clientX-canv.offsetLeft;
    currentpositionY=e.touches[0].clienty-canv.offsetTop;

    ctx.beginPath();
    cyx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(lastpositonX,lastpositonY);
    ctx.lineto(currentpositionX,currentpositionY);
    ctx.stroke();
}

