function wordCount(string){
    let newPalavras = string.toLowerCase().split(/[ .:;?!~,`"&@$%^|()<>{}\[\]\r\n\s/\\]+/)
    let contagemPalavras = Object.create(null)

    for (let i = 0; i < newPalavras.length; i++) {
        let palavra = newPalavras[i].match(/\b\w+('\w)?\b/g)

        if(!contagemPalavras[palavra]){
            contagemPalavras[palavra] = 1;
        } else {
            contagemPalavras[palavra]++
        }

    }

    delete contagemPalavras['']
    delete contagemPalavras[null]

    console.log(typeof newPalavras)
    return contagemPalavras
}

console.log(wordCount("Joe can't tell between 'large' and large."))
