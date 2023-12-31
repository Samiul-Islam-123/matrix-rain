//intializing canvas
var canvas = document.getElementById('MatrixCanvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//drawing black rectangle
context.fillStyle = 'black';
context.fillRect(0,0,canvas.width, canvas.height);

//intializing symbols
const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン';
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

const symbols = katakana + alphabets + numbers;

//initializing other variables
const fontSize = 14;
const colums = canvas.width/fontSize;
const raindrops = [];
const fps = 20;
const interval = 1000/fps;

//innitializing the array
for(let i=0;i<colums;i++)
raindrops[i] = 1;

function BreathingColor(){
    return //rgb
}

function drawSymbol(){

    context.fillStyle = `rgba(0,0,0,0.09)`;
    context.fillRect(0,0,canvas.width, canvas.height);

    context.fillStyle='yellow';
    context.font = fontSize + 'px monospace'
    for(let i=0;i<raindrops.length;i++){
        const currentSymbol =symbols.charAt(Math.floor((Math.random() * symbols.length)));
        const xPos = i * fontSize;
        const yPos = raindrops[i] * fontSize;
        context.fillText(currentSymbol, xPos, yPos);
        
        //checking condition for bottom of screen
        if(yPos > canvas.height && Math.random() > 0.957)
        raindrops[i] = 0;//current symbol goes to top position
       
        raindrops[i]++;//making it fall

        
    }
}

setInterval(drawSymbol, interval)

