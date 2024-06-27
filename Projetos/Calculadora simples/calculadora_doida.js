function calcular() {
    let valor1, valor2, operacao, caixaResultado, resultado;
    
    valor1 = Number(document.getElementById("valor1").value);
    valor2 = Number(document.getElementById("valor2").value);
    operacao = (document.getElementById("operacao").value);
    caixaResultado = (document.getElementById("caixaResultado"));

    if (operacao === '+') {
        resultado = valor1 + valor2;
    } else if (operacao === '-') {
        resultado = valor1 - valor2;
    } else if (operacao === '*') {
        resultado = valor1 * valor2;
    } else {
        resultado = valor1 / valor2;
    }
    
    caixaResultado.textContent = resultado;
}