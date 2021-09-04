const array = [
    200,100,50,4000, 3500,53,56
]; 

function mitad(lista){
    return parseInt(lista.length / 2)
}

function esPar(num){
    if(num % 2 === 0) {
        return true
    } else {
        return false
    }
}

function ordenarLista(lista) {
    return lista.sort((a,b) => a -b)
}

function mediana(lista){
    let mediana;
    
    const orderedList = ordenarLista(lista)
    const mitadLista = mitad(lista); 
    const even = esPar(mitadLista)

    
    if(even) {
      return mediana = (orderedList[mitadLista - 1] + orderedList[mitadLista])/2  
    } else {
         return mediana = orderedList[mitadLista]
    }

}


console.log(mediana(array))
