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

function verificar(){
    const palpite = document.getElementById('numero').value;
    
    if(palpite == numerogerado){
        alert("Parabéns, voçê acertou");
    }
    
    else if(palpite > numerogerado) {
       alert("Numero alto, tente com um menor!");
    }
    
    else { 
        alert("Numero baixo, tente com um maior! ");
    }

    
}

function resetarjogo(){
    const tentativas = 1;
   
    
   
}






