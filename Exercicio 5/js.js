let altura = parseFloat(prompt("Digite sua altura: "));

let peso = parseFloat(prompt("Digite seu peso: "));

imc = peso / (altura * altura)

if (imc < 18.5){
    document.write("Você está abaixo da faixa de peso ideal e seu IMC é: ", + imc)
}
else if (imc >= 18.5 && imc <= 24.99){
    document.write("Você está dentro da faixa de peso ideal e seu IMC é: ", + imc)
}
else if (imc > 24.99){
    document.write("Você está acima da faixa de peso ideal e seu IMC é: ", + imc)
}