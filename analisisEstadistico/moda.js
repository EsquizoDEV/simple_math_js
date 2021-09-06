const listaOrigen = [1,1,1,12,2,2,2,3,3,3,3,4,54,56,6,76,7,7];

function moda(lista){
    const listaCount = {}
    lista.map((elem) => {
        if(listaCount[elem]) {
            listaCount[elem] += 1
        } else  {
            listaCount[elem] = 1 
        }
    })

    const listaArray = Object.entries(listaCount).sort((valorAcum, nuevoValor) => {
        return valorAcum[1] - nuevoValor[1]
    })

    const moda = listaArray[listaArray.length -1]
    

    return moda[0]
}




console.log(`La moda de la lista es ${moda(listaOrigen)}`)