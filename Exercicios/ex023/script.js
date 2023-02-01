const resultado = document.querySelector('.resultado');
const listaDePopulação = document.getElementsByClassName('numero');

function contador(){
    console.log(resultado);
    console.log(listaDePopulação);

    let resulta = 0

    for (let i = 0; i < listaDePopulação.length; i++) {  

        let valorPopulação = Number(listaDePopulação[i].outerText);

        resulta = resulta + valorPopulação
    }
    
    resultado.textContent = resulta.toLocaleString();

    console.log(resulta.toLocaleString());
    
}

function formatandoNumeros(){

    for (let i = 0; i < listaDePopulação.length; i++) {  

        let valorPopulação = Number(listaDePopulação[i].outerText);

        listaDePopulação[i].textContent = valorPopulação.toLocaleString();
    }

}
contador();
formatandoNumeros();