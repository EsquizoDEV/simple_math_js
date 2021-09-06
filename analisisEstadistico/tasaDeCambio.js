
//datos de el cambio en el PIB nominal por año
const dataPIB = [{
    año:1995,
    pib: 1678834

    },
    {
    año:1996,
    pib: 2296674
    },
    {
    año:1997,
    pib: 2873272
    },
    {
    año:1998,
    pib: 3517781
    },
    
]

const inputPeriod = document.getElementById("inputPeriod")
const button = document.getElementById("button")

//Calcula la diferencia dentro de los valores de un array de dos elementos
function difference(array) {
    const result = array[1] - array[0]
    
    return result
    
}

//Busca el indice dentro de un array de objetos que corresponde a la propiedad que se pasa como parametro
function searchIndex(year){

    const index = dataPIB.findIndex(data => data.año === year)

    return index

}

//Retorna la raíz nesima de el valor que recibe como parametro, n= segundo parametro, valor= primer parametro
function nthRoot(rad, ind) {
    if(rad < 0) {
        return undefined
    }

    return Math.pow(rad, 1/ind)
}


// retorna la tasa de crecimiento porcentual de dos datos 
function tasaCambio(){
    let tasaCrecPorc;
    
    let year1;
    let year2;
    
    let indexofYear;
    
    let pib1;
    let pib2;

    let division;

    const period = inputPeriod.value
    
    const parsedPeriod = period.split('-').map((year) => {
        return parseInt(year)
    })

    const orderedPeriod = parsedPeriod.sort((a,b) =>  a-b)

    const periods = difference(orderedPeriod)
    
    year1 = orderedPeriod[0];
    year2 = orderedPeriod[1];

    indexofYear = searchIndex(year1);
    pib1 = dataPIB[indexofYear].pib;

    indexofYear = searchIndex(year2);
    pib2 = dataPIB[indexofYear].pib;

    if(periods === 1) {
        //calcular tasa de crecimiento porcentual
        tasaCrecPorc = ((pib2/pib1) - 1) * 100 
        console.log(`La tasa de crecimiento porcentual es de ${tasaCrecPorc.toFixed(2)}%`)
    } else {
        //calcular tasa de crecimiento promedio anual
            division = pib2/pib1
            tasaCrecPorc = ((nthRoot(division,periods)) - 1) * 100
            console.log(`La tasa de crecimiento promedio anual es de ${tasaCrecPorc.toFixed(2)}%`)
    }
    
   
    
}

// retorna la tasa de crecimento promedio anual




