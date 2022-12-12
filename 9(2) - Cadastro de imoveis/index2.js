const imoveis = []
let opcao = ''

do {
    opcao = prompt (` Quantidade de imoveis cadastrados: \n${imoveis.length}
    \nInsira uma opção: \n1 - Cadastrar um imovel \n2 - Mostrar todos os imoveis \n3 - Sair`)

    switch(opcao) {
        case "1":
            const imovel = {}

            //Lidando com objetos
            imovel.proprietyName = prompt ("Digite o nome do proprietario: ")
            imovel.roomQuantity = prompt ("Digite a quantidade de quartos: ")
            imovel.bathroomQuantity = prompt ("Digite a quantidade de banheiros: ")
            imovel.garage = prompt("O imovel possui garagem? (sim/não)")

            let confirmacao = confirm (`Salvar este imovel?
            Proprietario: ${imovel.proprietyName}
            Quantidade de quartos: ${imovel.roomQuantity}
            Quantidade de banheiros: ${imovel.bathroomQuantity}
            Garagem: ${imovel.garage}`)

            if (confirmacao){ //Se a confirmação for verdadeira...
                imoveis.push(imovel)
            }
        break
        case "2":
            for (let i = 0; i < imoveis.length;i++){
                //Lidando com o array que estará referenciando o objeto
                alert (`Imovel ${i + 1}
                Proprietario: ${imoveis[i].proprietyName}
                Quantidade de quartos: ${imoveis[i].roomQuantity}
                Quantidade de banheiros: ${imoveis[i].bathroomQuantity}
                Possui Garagem? ${imoveis[i].garage}`)
            }
        break
        case "3":

        break
        default:
            alert("Opção invalida")
    }
} while (opcao != '3')