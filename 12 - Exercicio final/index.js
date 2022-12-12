const vagas = []

//Mostrar o menu
function ShowMenu(){
    let menu 
    do {
        menu = prompt (`
        Escolha uma opção abaixo: 
        1 - Listar vagas disponiveis 
        2 - Criar uma nova vaga 
        3 - Visualizar uma vaga 
        4 - Inscrever um candidato em uma vaga
        5 - Excluir uma vaga
        6 - Sair`)
        Redirect(menu)
    } while (menu != "6")

}

//Redirecionar dependendo da opção escolhida
function Redirect(menu){
    if (menu == "1"){
        CheckVacanciesLenght()
    } else if (menu == "2"){
        RegisterVacancies()
    } else if (menu == "3"){
        ViewVacancies()
    } else if (menu == "4"){
        RegisterCandidates()
    } else if (menu == "5"){
        DeleteVacancies()
    }
}

//Opçao 1 - Validação de tamanho
function CheckVacanciesLenght(){
    if (vagas.length == 0){
        alert ("Não existe vagas para mostrar! ")
    } else {
        ShowVacancies()
    }
}

//Opção 1 - Mostrar as vagas
function ShowVacancies(){
    for (let i = 0; i < vagas.length; i ++){
        alert (`
        Vaga ${i + 01}: 
        Nome da vaga: ${vagas[i].name}
        Descrição da vaga: ${vagas[i].description}
        Limite da vaga: ${vagas[i].limiteData}
        Quantidade de participantes inscritos: ${vagas[i].candidatos.length}`)
    }
}

//Opção 2 - Registrar vagas
function RegisterVacancies(){

    const vaga = {
        candidatos: []
    }
    vagas.indice = (vagas.length + 01)
    vaga.name = prompt ("Insira o nome da vaga:")
    vaga.description = prompt ("Qual a descrição da vaga? ")
    vaga.limiteData = prompt ("Qual a data de limite da vaga?")
        
    let confirmation = Confirmation(vaga)

    if (confirmation){
        vagas.push(vaga)
    }

}

//Opção 2 - Confirmar vaga
function Confirmation(vaga){
    let confirmation = confirm (`
    Salvar esta vaga? 
    \n Nome da vaga: ${vaga.name}
    \n Descrição da vaga: ${vaga.description}
    \n Limite da vaga: ${vaga.limiteData}`)
    return confirmation
}

//Opçao 3 - Visualizar uma vaga especifica
function ViewVacancies(){

    let i = Number (prompt ("Qual o numero da vaga que você deseja visualizar? "))

    let index = vagas[i]
    let check = CheckDelete(index)
    if (check){
        alert (`
        Vaga ${i + 01}: 
        Nome da vaga: ${vagas[i].name}
        Descrição da vaga: ${vagas[i].description}
        Limite da vaga: ${vagas[i].limiteData}
        Quantidade de participantes inscritos: ${vagas[i].candidatos.length}`)
        for (let j = 0; j < vagas[i].candidatos.length;j++){
            alert (`
            Nome da vaga: ${vagas[i].name}
            Candidatos inscrios: ${vagas[i].candidatos[j]}
            `)
        }
    }
}

//Opção 4 - Inscrever um candidato em uma vaga
function RegisterCandidates(){

    let name = prompt ("Insira o nome do candidato: ")
    let index = Number (prompt ("Insira o indice da vaga que deseja cadastrar o candidato: "))


    let i = vagas[index]
    let check = CheckDelete(i)

    if (check){
        let confirmation = CandidatesConfirmation(index,name)
        if (confirmation){
             vagas[index].candidatos.push(name)
        }
    }

}

//Opçao 4 - Confirmar candidato
function CandidatesConfirmation(i,name){
    let confirmation = confirm (`
    Salvar este candidato?
    \n Nome do candidato: ${name} 
    \n Nome da vaga: ${vagas[i].name}
    \n Descrição da vaga: ${vagas[i].description}
    \n Limite da vaga: ${vagas[i].limiteData}`)
    return confirmation
}

//Opçao 5 - Deletar vaga
function DeleteVacancies(){
    let index = Number (prompt ("Digite o numero da vaga que deseja excluir: "))   

    let i = vagas[index]
    let check = CheckDelete(i)

    if (check){
    let confirmation = DeleteConfirmation(index)
        if (confirmation){
            vagas.splice(index,1)
        }
    }
}

//Opçao 5 - Confirmar delete
function DeleteConfirmation(i){
    let confirmation = confirm (`
    Deletar esta vaga? 
    \n Nome da vaga: ${vagas[i].name}
    \n Descrição da vaga: ${vagas[i].description}
    \n Limite da vaga: ${vagas[i].limiteData}`)
    return confirmation
}

//Opção 3/5 - Verificar se vaga existe
function CheckDelete(i){
    if (i == undefined){
        alert ("Esta vaga não consta em sistema!!")
        return false 
    } else {
        return true
    }
}



