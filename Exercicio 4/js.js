let valor = parseFloat(prompt("Digite o valor de fabrica do seu carro: "))

custoDistribuidor = valor * 28 /100;

custoImposto = valor * 45 / 100;

custoTotal = valor + custoDistribuidor + custoImposto;

document.write(`O valor do seu carro esta avaliado em um total de ${custoTotal} 
com impostos e custo da distribuidora.`);