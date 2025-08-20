const readlineSync = require('readline-sync')

let pessoa = [
    {nome:"Rebeca", idade: 22, cidade: "Niterói"},
    {nome:"Joãozinho", idade: 5, cidade: "Valença"}
]

for(let indivíduo in pessoa){
    console.log ([pessoa[indivíduo]])
}