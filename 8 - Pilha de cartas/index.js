
let cards = []

//Função para redirecionar 
function Redirect(menu,cards){
        if (menu == "1"){
            cards = AddCard(cards)
        } 
        if (menu == "2"){
            cards = RemoveCard(cards)
        }
}

//Função para mostrar o menu 
function ShowMenu(){
    let menu 
    do {
        menu = prompt ("Escolha uma opção abaixo: \n\n1 - Adicionar uma carta \n2 - Puxar uma carta \n3 - Sair")
    } while (!["1","2","3"].includes(menu))
    Redirect(menu,cards)
}

//Função para adicionar cartas
function AddCard(cards){
    let card = prompt ("Qual o nome da carta que quer adicionar ao baralho?")
    cards.unshift(card)
    ShowMenu()
    return cards
}

//Função para remover cartas
function RemoveCard(cards){
    cardsLenght = CheckCards(cards)
    if (cardsLenght != 0){
        let card = cards.pop()
        alert (`Sua carta é: ${card}`)
    }
    ShowMenu()
    return cards
}

//Função para verificar se o array esta vazio
function CheckCards(cards){
    let cardsLenght = cards.length
    if (cardsLenght == 0){
        alert ("Não existe cartas na sua mão! por favor, puxar alguma")
    }
    return cardsLenght
}

