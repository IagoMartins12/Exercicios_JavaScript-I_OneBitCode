function Start(){
    let actualMoney = CatchActualMoney()
    ShowMenu(actualMoney)
}

//Função para mostrar o menu de opções e chamar a função de redirecionamento
function ShowMenu(actualMoney){
    let menu
    do {
        menu = prompt (`Seu dinheiro atual é ${actualMoney}. \nEscolha uma opção: 
                        \n1 - Adicionar dinheiro
                        \n2 - Remover dinheiro
                        \n3 - Sair`)
    } while (!["1","2","3"].includes(menu))

    Redirect(menu,actualMoney)
}

//Função para somar o dinheiro
function AddMoney(actualMoney, addMoney){
    actualMoney += addMoney
    return actualMoney
}

//Função para subtrair o dinheiro
function removeMoney (actualMoney, removeMoney){
    actualMoney -= removeMoney
    return actualMoney
}

//Função para coletar os dados para adicionar
function CatchAddMoney(actualMoney){
    let addMoney = Number(prompt("Digite o quanto você quer adicionar: "))
    actualMoney = AddMoney(actualMoney, addMoney)
    ShowMenu(actualMoney)
    return addMoney
}

//Função para coletar os dados para remover
function CatchRemoveMoney(actualMoney){
    let removeMoney = Number(prompt("Digite o quanto você quer remover: "))
    actualMoney = removeMoney(actualMoney, removeMoney)
    ShowMenu(actualMoney)
    return removeMoney
}

//Função de redirecionamento
function Redirect(menu,actualMoney){
    if (menu == "1"){
        CatchAddMoney (actualMoney)
    } else if (menu == "2"){
        CatchRemoveMoney(actualMoney)
    } 
}

//Função para coletar o dinheiro inicial
function CatchActualMoney(){
    let actualMoney = Number(prompt ("Digite a quantidade inicial de dinheiro: "))
    return actualMoney
}

