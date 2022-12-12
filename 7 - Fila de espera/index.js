let pacientes = []

//Função para adicionar os elementos dentro da div
function AddPacient(){
        let result = document.getElementById('res')

        let text = document.createElement('p')
        text = document.createTextNode('Insira o nome do paciente: ')

        let newInput = document.createElement('input')
        newInput.setAttribute("id", "txtNome")

        let button = document.createElement('button')
        button.innerHTML = 'Inserir'
        button.setAttribute("onclick", "Add(pacientes)")

        result.appendChild(text)
        result.appendChild(newInput)
        result.appendChild(button)
}

//Função para adicionar pacientes no array e chamar a função para adicionar no select
function Add(pacientes){
    let txtNome = document.getElementById("txtNome")
    let lenght = CheckLenght(txtNome)
    let checkDuplicity = pacientes.includes(txtNome.value)
    let result = document.getElementById('res')

    if (lenght != 0){
        if (checkDuplicity === true) {
            alert ("Ja existe paciente com esse nome, favor especificar!")
        } else {
            txtNome = txtNome.value
            pacientes.push(txtNome)
            AddSelect(pacientes)
            ClearDiv(result)
        }
    }
}

//Função para adionar os elementos do array dentro do select
function AddSelect(pacientes) {
    let select = document.getElementById('txtSelect')

    ClearSelect(select)

    for (let i = 0; i < pacientes.length; i++){
        let newOption = document.createElement('option');

        let pacientess = pacientes[i]
        let indice = pacientes.indexOf(pacientess)
        let pacientNames = pacientes[indice]
        newOption.text =  `${indice + 1} - ${pacientNames}`
        select.appendChild(newOption);
    }

}

//Função para chamar as outras funções de remoção
function Remove(){
    RemovePacient(pacientes)
}

//Função para remover os elementos do array
function RemovePacient(pacientes){
    pacientLength = CheckPacient(pacientes)
    if (pacientLength > 0){
        pacientes.shift()
        RemoveSelect(pacientes)
    }
}

//Função que removerá a primeira opção no select, e limpará o select e depois irá inserir todos os elementos do array dentro do select
function RemoveSelect (pacientes){
    let select = document.getElementById('txtSelect')
    let option = document.getElementsByTagName('option')

    select.removeChild(option[0]); 

    ClearSelect(select)
    AddSelect(pacientes)
}

//Função para checar se a caixa de input esta vazia
function CheckLenght(txtNome){
    if(txtNome.value.length == '' ){
        alert ("Por favor, insira um nome valido!")
    } 
    let lenght = txtNome.value.length
    return lenght 
}

//Função para ver se existe duplicidade no array
function CheckDuplicity(txtNome, pacientes){
     if (pacientes.includes(txtNome)) {
        alert ("Ja existe paciente com esse nome, favor especificar!")
        return pacientes.includes(txtNome)
    }
}

//Função para verificar se tem algum elemento no array
function CheckPacient(pacientes){
    if (pacientes.length == 0){
        alert ("Não existe pacientes para consultar!")
    }
    return pacientes.length
}
//Função para limpar a div de resposta
function ClearDiv(result){

    while (result.firstChild)
    {
        result.removeChild(result.lastChild);  
    }
}

//Função para limpar o select
function ClearSelect(select){    
    while (select.childNodes.length >= 1 )
    {
    select.removeChild(select.firstChild);       
    }
}

//função para limpar o array e o select
function ButtonClear(){
    pacientes = []
    let select = document.getElementById('txtSelect')
    ClearSelect(select)
}

