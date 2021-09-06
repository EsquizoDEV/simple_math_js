
//utils
const salarios = colombia.map((person) => {
    return person.salary
})

const salariosOrdered = salarios.sort((a,b) => {
    return a - b
})

function esPar(numero) {
    return (numero % 2 === 0);
}

//mediana aritmética
function mediaAritmética(lista){
    let promedio = 0;
    
    const sumaLista = lista.reduce((valorAcum = 0, nuevoElemento)=> {
        return valorAcum + nuevoElemento
    });
    // for(let i=0; i<lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    
    
    promedio = sumaLista / lista.length;
    
    return promedio
    
}

//mediana general
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2, 10);

    if(esPar(lista.length)) {
        const mitad1 = lista[mitad - 1];
        const mitad2 = lista[mitad];

        const mediana = mediaAritmética([mitad1,mitad2])

        return mediana

    } else {
        const mitad = lista[mitad];

        return mitad;
    }
}

const medianaGeneralSalarios = medianaSalarios(salariosOrdered)

//mediana del top 10
const spliceStart = (salariosOrdered.length * (90))/100;
const spliceCount = salariosOrdered.length - spliceStart;

const top10Salarios = salariosOrdered.splice(spliceStart, spliceCount)

const medianaTop10 = medianaSalarios(top10Salarios)

console.log({
    medianaGeneralSalarios,
    medianaTop10
})