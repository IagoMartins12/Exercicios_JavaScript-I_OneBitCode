function ShowMenu(){
    let menu 
    do {
        menu = prompt ('Escolha uma opção: \n1-Calcular a area do triângulo \n2-Calcular área do retângulo \n3-Calcular área do quadrado' +
        '\n4-Calcular área do trapézio \n5- Calcular área do circulo \n6- Sair')
        showMessage(menu)
    } while (menu != "6")

    
}

function showMessage(menu){
    if (menu == "1"){
        let base = prompt ("Insira a base: ")
        let altura = prompt ("Insira a altura: ")
        triangleArea = CalculateTriangleArea(base, altura)
        alert (`A area do triangulo é : ${triangleArea}`)
    } else if (menu == "2") {
        let base = prompt ("Insira a base: ")
        let altura = prompt ("Insira a altura: ")
        rectangleArea = CalculateRectangleArea(base, altura)
        alert (`A area do retangulo é : ${rectangleArea}`)
    } else if (menu == "3"){
        let lado = prompt ("Insira o lado: ")
        squareArea = CalculateSquareArea(lado)
        alert (`A area do quadrado é: ${squareArea}`)
    } else if (menu == "4"){
        let base = prompt ("Insira o lado da primeira base")
        let base2 = prompt ("Insira lado da segunda base")
        let altura = prompt ("Insira a altura: ")
        trapezeArea = CalculateTrapezeArea(base,base2,altura)
        alert (`A area do trapézio é ${trapezeArea}`)
    } else if (menu == "5") {
        let raio = prompt ("Digite o lado raio: ")
        circleArea = CalculateCircleArea(raio)
        alert (`A area do circulo é: ${circleArea}`)
    } 
}


function CalculateTriangleArea(base,altura){
    let triangleArea = (base * altura) / 2
    return triangleArea
}

function CalculateRectangleArea(base,altura){
    let rectangleArea = base * altura
    return rectangleArea
}

function CalculateSquareArea(lado){
    let squareArea = lado * lado
    return squareArea
}

function CalculateTrapezeArea(baseMaior,baseMenor, altura){
    let trapezeArea = (baseMaior + baseMenor) * altura / 2
    return trapezeArea
}

function CalculateCircleArea (raio){
    const pi = 3.14
    let circleArea = (raio * 2) * pi
    return circleArea
}

