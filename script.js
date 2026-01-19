let tentativas = 1;

function numeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
const randomNumber = numeroAleatorio(1, 100);
const numerogerado = Math.floor(Math.random() * 100) + 1;
console.log(numerogerado)

function verificar(){
    const palpite = number(document.getElementById('palpite').value);
    const mensagem = document.getElementById('mensagem');
    tentativas++;

    if(palpite === numerogerado){
        alert('Parabéns, voçê acertou')
    }
    else if(palpite > numerogerado){
       alert("Numero alto, tente com um menor!");
    }
    else{
        alert("Numero baixo, tente com um maior! ")
    }
}

function resetarjogo(){
    tentativas = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
   
}

const converter = document.getElementById("numero");

const valorstring = converter.value;

const valorInteiro = parseInt(valorstring, 30);




