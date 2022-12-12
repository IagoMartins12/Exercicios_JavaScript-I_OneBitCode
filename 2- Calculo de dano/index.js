function Start(){
    CatchData()
}

function CatchData(){
    let name = prompt("Digite o nome do primeiro personagem? : ")
    let powerAttack = Number (prompt (`Qual o poder de ataque do ${name}? `))
    let name2 = prompt("Digite o nome do segundo personagem? : ")
    let lifePoints = prompt (`Quantos pontos de vida o ${name2} possui? `)
    let shieldPoints = prompt (`Quantos pontos de defesa seu personagem possui? `)
    let shield
    do {
        shield = prompt (`${name2} possui um escudo? \n1- Sim \n2-Não`)
    } while (!["1","2"].includes(shield))

    Main(name,powerAttack,name2,lifePoints,shieldPoints,shield)
}

function Main(name,powerAttack,name2,lifePoints,shieldPoints,shield){
    let damage = Number
    if (powerAttack > shieldPoints & shield == 2){
        damage = powerAttack - shieldPoints
        lifePoints = lifePoints - damage
    } else if (powerAttack > shieldPoints & shield == 1 ){
        damage = (powerAttack - shieldPoints) / 2
        lifePoints = lifePoints - damage
    } else {
        damage = 0
    }

    ShowMessage(name,powerAttack,name2,lifePoints,shieldPoints,shield)
}

function ShowMessage(name,powerAttack,name2,lifePoints,shieldPoints,shield){
    shield = shield == 1 ? 'Sim': 'Não'
    alert (`Primeiro personagem:\n\n Nome: ${name} \nPoder de ataque: ${powerAttack}`)

    alert (`Segundo personagem: \n\n Nome: ${name2} \nPontos de vida atual: ${lifePoints} \nPoder de defesa: ${shieldPoints} \nPossui escudo? ${shield}`)
}

