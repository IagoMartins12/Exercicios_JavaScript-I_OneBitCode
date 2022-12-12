const vagas = []

function ListarVagas(){
    const vagasEmTexto = vagas.reduce(function (textoFinal,vaga,indice) {
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.lenght + " candidatos)\n"
        return textoFinal
    }, "")

    alert (vagasEmTexto)
}

function NovaVaga() {
    const nome = prompt ("Qual o nome da vaga?")
    const descricao = prompt ("Informe a descrição para a vaga: ")
    const dataLimite = prompt ("Qual a data limite para a vaga?")

    const confirmacao = confirm (
        `Deseja criar uma nova vaga com essas informações?
        \nNome: ${nome} 
        \nDescrição: ${descricao}
        \nData limite: ${dataLimite}`
    )

    if (confirmacao){
        const novaVaga = { nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert ('Vaga criada')
    }
}

function ExibirVaga(){
    const indice = prompt ("Informe o indice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal,candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert (
        "Vaga n : " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite + 
        "\nQuantidade de candidatos: " + vaga.candidato.lenght + 
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function InscreverCandidato(){
    const candidato = prompt("Informe o nome do{a} candidato(a): ")
    const indice = prompt("Informe o indice da vaga para a qual o(a) candidato(a) deseja se inscrever: ")
    const vaga = vagas[indice]

    const confirmacao = confirm (
        "Deseja inscrever o candidato: " + candidato + " na vaga " + indice + "?" + 
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao + 
        "\nData limite: " + vaga.dataLimite)
        
    if (confirmacao){
        vaga.candidato.push(candidato)
        alert ("Inscrição realizada")
    }
}

function ExcluirVaga() {
    const indice = prompt ("Informe o indice da vaga que deseja exibir: ")
    const vaga = vagas[indice]

    const confirmacao = confirm (
        "Deseja excluir a vaga: " + indice + "?" + 
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao + 
        "\nData limite: " + vaga.dataLimite)

    if (confirmacao){
        vagas.splice(indice,1)
        alert ("Vaga excluida")
    }
}

function ExibirMenu(){
    const opcao = prompt (
        "Cadastro de Vagas de emprego" + 
        "\n\nEscolha uma das opções: " + 
        "\n1 - Listar vagas disponiveis " + 
        "\n2 - Criar uma nova vaga " + 
        "\n3 - Visualizar uma vaga " + 
        "\n4 - Inscrever um(a) candidato(a)" + 
        "\n5 - Excluir uma vaga " + 
        "\n6 - Sair"
    )

    return opcao
}

function Executar(){
    let opcao = ""

    do {
        opcao = ExibirMenu()

        switch(opcao){
            case "1":
                ListarVagas()
            break
            case "2":
                NovaVaga()
            break
            case "3":
                ExibirVaga()
            break
            case "4":
                InscreverCandidato()
            break
            case "5":
                ExcluirVaga()
            break
            default: 
                alert ("Opção invalida")
        }
    } while (opcao != "6")
}