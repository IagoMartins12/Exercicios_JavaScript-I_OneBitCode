const array = ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandolf']

//Adicionando elementos 
//push (Insere elemetos na ultima linha )
let tamanho = array.push("Boromir") //Da pra gente pegar o tamanho do array com o push 

// unshift (Insere elementos na primeira linha)
tamanho = array.unshift("Boromir")

//Removendo elementos
//pop(Remove o ultimo elemento)
let ultimoElemento = array.pop()

//shift (remove o primeiro elemento)
ultimoElemento = array.shift()

//Pesquisar por um elemento
//includes
let inclui = array.includes('Sam') //Retorna um true ou false

//indexOf
let indice = array.indexOf('Sam') //Retorna a posição do elemento no vetor

//Cortar e concatenar
//Slice
let hobbits = array.slice(0,4) //Corta e copia os elementos de um vetor, é necessario indicar o começo e o fim 
hobbits = array.slice(-4) //pega do fim ao começo

//concat 
let concatenar = hobbits.concat(Array, 'teste') //Concatena um array ou elementos em um array a parte

//Substituição dos elementos 
//splice 
//O slice precisa de 3 condições: o indice que ele irá agir, quantos elementos ela irá excluir, e o elemento que será substituido no final 
//Após a terceirá condição, é possivel escrever outras que irá substituindo os elementos por aqueles inseridos
let a = concatenar.splice(indice,1,"Boromir2") //Retorna o elemento removido

//Iterar sobre os elementos 
for (let indice = 0; indice < hobbits.length; indice++){
    let elemento = hobbits[indice]
}