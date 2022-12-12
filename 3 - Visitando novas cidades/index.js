function Start(){
    CatchData()
}

function CatchData(){
    let turistName = prompt ("Turista, digite o seu nome: ")
    let option
    let cityNames = []

    option = CheckOption(option,turistName)

    if (option == "1"){
        AskCity(cityNames)
        AddMore(option,turistName,cityNames)
    }
    

}

function CheckOption(option,turistName){
    do 
        option = prompt (`${turistName}, ja visitou alguma cidade?  \n1 - Sim \n2 - Não`)
    while (!["1", "2"].includes(option))
    return option
}

function AskCity(cityNames){
    let cityName = prompt("Qual o nome da cidade que visitou?")
    cityNames.push(cityName)
    return cityNames
}

function AddMore(option, turistName,cityNames){
    do 
        option = prompt (`${turistName}, ja visitou alguma outra cidade? \n\n1 - Sim \n2 - Não`)
    while (!["1", "2"].includes(option))
    
    if (option == "1"){
        AskCity(cityNames)
        AddMore(option,turistName,cityNames)
    } else {
        Message(turistName,cityNames)
    }
    return option 

}

function Message(turistName,cityNames){
    cityNamesLenght = cityNames.length 
    alert (`${turistName}, essas são as cidades que você visitou: \n${cityNames}. \nForam no total: ${cityNamesLenght}`)
}