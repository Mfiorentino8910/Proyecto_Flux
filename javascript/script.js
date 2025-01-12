//INICIACION DE CANVAS
/*var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');*/

//CODIGO DE ANCHO Y ALTP DEL CANVAS
/*canvas.width = window.innerWidth;
canvas.height = window.innerHeight;*/


// CODIGO DE CARACTERES=LATTERS_VAR MATRIX
/*var letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
letters = letters.split('');*/


// CODIGO DE CONFIGURACION DE COLUMNAS
/*var fontSize = 10,
    columns = canvas.width / fontSize;*/


// CODIGO DE DROPS_VAR BUCLE-INFINITO
/*var drops = [];
for ( var i = 0; i < columns; i++){
    drops[i] = 1;
}*/


//CODIGO DE FUNCION DRAW
/*function draw(){
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
         var text = letters[Math.floor(Math.random() * letters.length)];
         ctx.fillStyle = '#0f0';
         ctx.fillText(text, i * fontSize, drops[i] * fontSize);
         drops[i]++;
         if (drops[i] * fontSize > canvas.height && Math.random() > .95){
             drops[i] = 0;
         }
    }
}*/
//setInterval(draw, 33);


const canvas = document.querySelector('#scene');
canvas.width = canvas.clientWidth;
canvas.heigth = canvas.clientHeight;
const ctx = canvas.getContext('2d');


if(window.devicePixelRatio > 1){
    canvas.width = canvas.clientWidth * 2;
    canvas.heigth = canvas.clientHeight * 2;
    ctx.scale(2, 2);
}

let width = canvas.clientWidth;
let height = canvas.clientHeight;
let rotation = 0;
let dots = [];

const DOT_RADIUS = 4;
let GLOBE_RADIUS = width * 0.7;
let GLOBE_CENTER_Z = -GLOBE_RADIUS;
let PROJECTION_CENTER_X = width / 2; 
let PROJECTION_CENTER_Y  = height / 2;
let FIELD_OF_VIEW = width * 0.8;