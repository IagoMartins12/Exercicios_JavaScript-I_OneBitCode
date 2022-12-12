//Declarando o objeto
let Properties = {
    ownerName: [],
    roomQuantity: [],
    bathroomQuantity: [],
    garage: []
}

//Função para registrar os imoveis
function RegisterProperties(){
    let name = prompt ("Digite o nome do proprietario: ")
    Properties.ownerName.push(name)

    let roomQuantity = prompt ("Digite a quantidade de quartos: ")
    Properties.roomQuantity.push(roomQuantity)

    let bathroomQuantity = prompt("Digite a quantidade de banheiros: ")
    Properties.bathroomQuantity.push(bathroomQuantity) 

    let garagem
    do {
        garagem = prompt ("O imovel possui garagem? \n\n1 - Sim \n2 -Não")
    } while (!["1","2"].includes(garagem))

    garagem = NameGarage(garagem)
    Properties.garage.push(garagem)

    ShowMenu()
}

//Definindo se possui garagem ou nao
function NameGarage(garagem){
    if (garagem == "1"){
        let garagem = 'Possui'
        return garagem
    } else {
        let garagem = 'Não possui'
        return garagem
    }
}

//Mostrando o menu
function ShowMenu(){
    let propertiesLenght = Properties.ownerName.length
    let menu 
    do {
        menu = prompt (` Quantidade de imoveis cadastrados: \n${propertiesLenght}
        \nInsira uma opção: \n1 - Cadastrar um imovel \n2 - Mostrar todos os imoveis \n3 - Sair`)
    } while (!["1","2"])

    Redirect(menu)

}

//Mostrando todos os imoveis cadastrados
function ShowProperties(){
    for (let i = 0; i < Properties.ownerName.length; i ++){
        alert (`
                Nome do proprietario: ${Properties.ownerName[i]}
                Quantidade de quartos: ${Properties.roomQuantity[i]}
                Quantidade de banheiros: ${Properties.bathroomQuantity[i]}
                Possui garagem? ${Properties.garage[i]}`)
    }
    ShowMenu()
}

//Função que irá redirecionar de acordo com o ShowMenu()
function Redirect(menu){
    if (menu == "1"){
        RegisterProperties()
    } else if (menu == "2"){
        propertiesLenght = CheckPropertiesLenght()
        if (propertiesLenght == 0) {
            ShowMenu()
        } else {
            ShowProperties()
        }
    }
}

//Verificando se o objeto esta vazio ou nao
function CheckPropertiesLenght(){
    let propertiesLenght = Properties.ownerName.length
    if (propertiesLenght == 0){
        alert ("Imoveis vazios...")
    }
    return propertiesLenght
}
