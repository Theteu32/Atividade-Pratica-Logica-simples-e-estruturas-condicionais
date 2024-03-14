let valor1 = parseFloat(prompt("Digite um valor: "));

let valor2 = parseFloat(prompt("Digite outro valor: "));

let expressao = prompt("Agora digite se quer somar, subtrair, dividir ou multiplicar").toLowerCase();

soma = valor1 + valor2;

subtrair = valor1 - valor2;

dividir = valor1 / valor2;

multiplicar = valor1 * valor2

switch(expressao){
    case 'somar':
        document.write(`O valor da Soma foi ${soma}`)
    break;
    case 'subtrair':
        document.write(`O valor da subtração foi ${subtrair}`)
    break;
    case 'dividir':
        document.write(`O valor da divisão foi ${dividir}`)
    break;
    case 'multiplicar':
        document.write(`O valor da multiplicação foi ${multiplicar}`)
}
