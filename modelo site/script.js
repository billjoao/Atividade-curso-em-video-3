function contar() {
    //obter os valores de entrada
    let inicial = document.getElementById('inicial').value;
    let final = document.getElementById('final').value;
    let passo = document.getElementById('passo').value;
    let resultado = document.getElementById('resultado');

    //verificar se os valores sao validos
    if (inicial === '' || final === '' || passo === '') {
        resultado.innerHTML = "Preencha todos os campos!!";
    }

    if (passo <= 0) {
        resultado.innerHTML = "Passo invalido, inserir um numero maior ou igual a 1"
    }

    //converter os valores para numero
    inicial = Number(inicial);
    final = Number(final);
    passo = Number(passo);

    //iniciando a contagem
    resultado.innerHTML = "iniciando... <br>";
    if (inicial < final) {
        //contagem crescente
     for (let i = inicial; i <= final; i += passo) {
        resultado.innerHTML += `${i} \u{2192}`
    }   
    }else{
        //contagem decrescente
        for (let i = inicial; i >= final; i -= passo) {
            resultado.innerHTML += `${i} \u{2192}`
        }
        resultado.innerHTML += "Fim!"
    }
    

}