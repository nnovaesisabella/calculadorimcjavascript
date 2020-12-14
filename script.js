
const calcular = document.getElementById('calcular');




function imc() {
const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');
  
    if (nome !== '' && altura !== '' && peso !== '') { 
    //cálculo do IMC
        const valorImc = (peso / (altura * altura)).toFixed(2);
        
        let classificacao = "";
        let camposerrado = "Verefique e preencha novamente";

        if (valorImc < 18.5) { 
            
            classificacao = 'abaixo do peso.';
        } else if (valorImc < 25.0) { 
            
            classificacao = 'com peso normal';
        } else if (valorImc < 29.9) {

            classificacao = 'com obsedidade grau I';
        } else if (valorImc < 35) {
            classificacao = 'com obesidade grau II';
 
        } else { 
            classificacao = 'com obesidade gra III ou mórbida. Procure o médico';
        } 
            
    //Resultado atribuido na caixa de texto 
        resultado.textContent = `${nome} seu IMC é ${valorImc}
    e você está  ${classificacao}`;

    } else { 
        resultado.textContent = 'Preencha todos os campos';
    }
   
}

calcular.addEventListener('click', imc);
