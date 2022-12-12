let personagens = [
    {nivel:42, nome:"Thrall", raca: "Orc", classe: "Xamã"},
    {nivel:28, nome:"Garrosh", raca: "Orc", classe: "Guerreiro"},
    {nivel:35, nome:"Varok", raca: "Orc", classe: "Guerreiro"},
    {nivel:35, nome:"Uther", raca: "Humano", classe: "Paladino"},
    {nivel:26, nome:"Jaina", raca: "Humano", classe: "Maga"},
    {nivel:39, nome:"Tyrande", raca: "Elfo noturno", classe: "Sacerdotisa"},
    {nivel:29, nome:"Muradin", raca: "Anão", classe: "Guerreiro"},
]

//For each
//Serve para executar uma função para cada elemento do array

function exibirElementos(elemento, indice, array){
    console.log (
        elemento,
        indice,
        array
    )
}

//Sem forEach:
for (let i = 0; i < personagens.length; i++){
    exibirElementos(lista[i], i, personagens)
}

//com for each
personagens.forEach(exibirElementos)

//Map
// O map faz um novo array com base nas modificações que nós desejamos 

//Por exemplo, um array que contenha so os nome da array acima 
//Sem o maps

let nomes = []

//Fazendo um novo array so com os nomes dos personagens
for (let i = 0; i < personagens.length; i++){
    nomes.push(personagens[i].nome)
}

//Com maps 
let nomes2 = personagens.map(function(personagem){
    return personagem.nome
})

//Filter
//Serve para filtrar elementos de um array, tambem cria um array com os elementos filtrados 

//Sem filter
let orcs =  []

//Filtrando os personagens que tem orc como raça
for (let i = 0; i < personagens.length; i++){
    if (personagens[i].raca ==='Orc'){
        orcs.push(personagens[i])
    }    
}

//Com filter
let orcs2 = personagens.filter(function (personagem){
    return personagem.raca === "Orc"
})

//Reduce
//Serve para transformar um array em uma outra coisa, podendo ser um objeto, outro array, strings, e etc. Um exemplo facil é para fazer equações com elementos de um array

//Somando todos os niveis dos personagens
let nivelTotal = personagens.reduce (function (valorAcumulado,personagem){
    return valorAcumulado + personagem.nivel[i] 
},0)