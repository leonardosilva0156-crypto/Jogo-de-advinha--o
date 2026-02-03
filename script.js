document.addEventListener('DOMContentLoaded', function() {
const tentativas = document.getElementById('tentativas');
const mensagem = document.getElementById('mensagem');
const button = document.getElementById('palpite');
const input = document.getElementById('numero');

const fulltentativas = 10;
let tentativasRestantes = fulltentativas;


tentativas.textContent = 'você tem ' + tentativasRestantes + ' tentativas';

const converter = document.getElementById('numero');
const numeroconverttido = parseInt(converter, 10);

function numeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
const randomNumber = numeroAleatorio(1, 100);
const numerogerado = Math.floor(Math.random() * 100) + 1;
console.log(numerogerado);

button.addEventListener('click', function () {
    verificar();

function verificar(){
    const palpite = document.getElementById('numero').value;
    
    if(palpite == numerogerado){
        mensagem.textContent = "Parabéns, voçê acertou";
        tentativas.textContent = 'você tem ' + tentativasRestantes + ' tentativas';
        button.disabled = true;
        input.disabled = true;
        return;
        
    }
    
    else if(palpite > numerogerado) {
       mensagem.textContent = "Numero alto, tente com um menor!";
    }
    
    else { 
        mensagem.textContent = "Numero baixo, tente com um maior! ";
    }

    
    
} 

    if(tentativasRestantes > 0){
       tentativas.textContent = 'você tem ' + tentativasRestantes + ' tentativas';
        
    
   }

   else{
    mensagem.textContent = "Suas tentativas acabaram, o numero era " + numerogerado;
    button.disabled = true;
    input.disabled = true;
    return;
    
   }
  
       tentativasRestantes--;
  
       });
});


function reiniciarjogo(){
    location.reload();
}

    



 




  
   
    
   



     




