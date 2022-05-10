document.getElementById('player').addEventListener("mouseover",sumarPuntos);

punto= 0;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML="puntos:<b>" + puntos + "</b";
    randNum = Math.round(math.random()*500);
    document.getElementById("player").style.margin =randNum + "px";
}