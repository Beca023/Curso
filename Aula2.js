let peso = 53
let altura = 1.73

const IMC = (peso/altura**2)

if (IMC < 18.5){
    console.log ("Magreza")
}
else if (IMC>18.5&&IMC<24.9){
    console.log ("Saudável")
}
else if (IMC>25.0&&IMC<29.9){
    console.log ("Sobrepeso")
}
else if (IMC>30.0&&IMC<34.9){
    console.log ("Obesidade grau I")
}
else if (IMC>35.0&&IMC<39.9){
    console.log ("Obesidade grau II")
}
else{
console.log ("Obesidade grau III")
}