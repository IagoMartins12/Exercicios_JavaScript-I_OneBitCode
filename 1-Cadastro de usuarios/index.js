//Função que é chamada atraves do onclick, captura as variaveis e mostra a resposta
function Start(){
    let firstName = document.getElementById('txtPrimeiroNome').value
    let lastName = document.getElementById('txtSobrenome').value
    let field = document.getElementById('txtCampoDeEstudo').value
    let yearBirth = Number (document.getElementById('anoNascimento').value)
    let answer = document.getElementById('res')

    ShowAnswer(firstName,lastName,field,yearBirth,answer)
}

//Função para calcular a idade atual 
function AgeCalculate(yearBirth){
    let date = new Date()
    let year = date.getFullYear()
    let age = year - yearBirth
    return age
}

//Função para mostrar os dados 
function ShowAnswer(firstName,lastName,field,yearBirth,answer){
    let age = AgeCalculate(yearBirth)
    answer.innerHTML = `Primeiro nome: ${firstName}` + 
                        `<p>Sobrenome: ${lastName}</p>` + 
                        `<p>Campo de estudo: ${field}</p>` + 
                        `<p>Idade atual: ${age}</p>`
}

