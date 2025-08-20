var carros = [
    {id: 1, modelo: "Corsa", marca:"Chevrolet",preço: 45000, createdAt: 1534506085621 },
    {id: 2, modelo:"Punto", marca: "Fiat", preço: 120000, createdAt: 1534506085621}
]

var total = 0

for(var i = 0; i < carros.length; i++){
    total += carros[i].preço
    console.log(total)
}