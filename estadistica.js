const lista = [
    100,
    200,
    300,
    500
];

function mediaAritmética(lista){
    let promedio = 0;
    
    const sumaLista = lista.reduce((valorAcum = 0, nuevoElemento)=> {
        return valorAcum + nuevoElemento
    });
    // for(let i=0; i<lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    
    
    promedio = sumaLista / lista.length;
    
    console.log(`el promedio es ${promedio}`)

    return promedio
    
}

mediaAritmética(lista)



