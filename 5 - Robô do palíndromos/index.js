function CathWord(){
    const word =  prompt ("Digite a palavra para inicializarmos a analise: ")

    let reversalWord = palíndromoVerificity(word)

    if (reversalWord == word){
        alert ("A palavra é um palíndromo!!\n\n" +
                `Palavra normal: ${word}
                \nPalavra invertida: ${reversalWord}`)
        
    } else {
        alert ("A palavra não é um palíndromo!!\n\n" +
                `Palavra normal: ${word}
                \nPalavra invertida: ${reversalWord}`)
    }
}

function palíndromoVerificity(word){
    let reversalWord = ""

    for (let i = word.length - 1 ;i >= 0; i--){
        reversalWord += word[i]
    }
    return reversalWord
}
