//Cuadrado
console.group("Cuadrado");
let ladosCuadrado = 5;

function perimetroCuadrado(lados) {
    return lados * 4;
}

perimetroCuadrado(ladosCuadrado);


function areaCuadrado(lado) {
    return lado * lado
};

areaCuadrado(ladosCuadrado);

console.groupEnd();

//Triángulo

function setTtriangleType(lado1,lado2,base) {
    if(arguments.length > 3) {
        alert("Un triángulo sólo tiene 3 lados, por favor introduce solo 3 valores")
    }

    if((lado1 === lado2) && (lado1 === base)) {
        console.log("equilatero");
        return "equilatero"
    } else if ((lado1 === lado2) && (lado1 != base) ){
        console.log("isoceles");
        return "isoceles"
    } else if((lado1 != lado2) && (lado1 != base)){
        console.log("escaleno");
        return "escaleno"
    }

}


function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base
}



function areaTriangulo(base,altura) {
    return (base * altura)/2
}


//Circulo
console.group("Circulo");

//Radio
const radio = 4;

//Diametro
function diametro(radio){
    return radio * 2
}


//pi
function calcPI() {
    return Math.PI;
}

//Circunferencia
function circunferencia(radio){
    const diam = diametro(radio)
    const pi = calcPI(); 
    
    return diam * pi;
}


//Area
function areaCirculo(radio){
    const pi = calcPI();
    return (radio * radio) * pi;
}

console.groupEnd();

//Interacción HTML cuadrado

const getDataSquare = document.getElementById("inputSquare");

function perimetroSquare() {
    
    const side = getDataSquare.value;
    const perimetro = perimetroCuadrado(side)
    alert(perimetro)
}

function areaSquare() {
    const side = getDataSquare.value;
    const area = areaCuadrado(side)
    alert(area)
}

//Interacción HTML triangulo
const getDataTriangle = document.getElementById("inputTriangle")

function perimetroTriangle(){
    const data = getDataTriangle.value;
    let rawValues = Array.from(data);
    let values = []
    
    //Conversión de tipo de dato string a number y  eliminando comas
    rawValues.map((value,index) => {
       const toNumber =  Number(value)
        if (isNaN(toNumber)) {      
            console.log(` se va a eliminar: ${rawValues[index]}`)
        } else  {
            values.push(toNumber)
        };   
    })

    const type = setTtriangleType(values[0], values[1], values[2]);

    const perimetro = perimetroTriangulo(values[0], values[1], values[2]);

    alert(`Tú triángulo es ${type} y tiene un perimetro de ${perimetro}`)
    
}

function heightTriangle(lado1 = undefined,lado2=undefined){
    const data = getDataTriangle.value;
    let rawValues = Array.from(data);
    let values = []
    let height = 0;
    
    //Conversión de tipo de dato string a number y  eliminando comas
    rawValues.map((value,index) => {
       const toNumber =  Number(value)
        if (isNaN(toNumber)) {
            console.log(` se va a eliminar: ${rawValues[index]}`)
        } else  {
            values.push(toNumber)
        };   
    })

    let a = values[0];
    let b = values[1]

    const type = setTtriangleType(values[0], values[1], values[2]);

    switch(type) {
        case "isoceles":
             height = Math.sqrt(((a || lado1)**2)-((b || lado2)**2/4))
             break;
        case "equilatero":
             height = ((Math.sqrt(3*(a || lado1)))/2)
             break;
        case "escaleno":
            alert("No puedo calcular altura de un triangulo escaleno")
            break;
    }
    
    if(lado1 && lado2) {
        return height
    }

    alert(`Tú triángulo es ${type} y tiene una altura de ${height}`)
    
}

function areaTriangle(){
    const data = getDataTriangle.value;
    let rawValues = Array.from(data);
    let values = []
    
    //Conversión de tipo de dato string a number y  eliminando comas
    rawValues.map((value,index) => {
       const toNumber =  Number(value)
        if (isNaN(toNumber)) {      
            console.log(` se va a eliminar: ${rawValues[index]}`)
        } else  {
            values.push(toNumber)
        };   
    })

    const type = setTtriangleType(values[0], values[1], values[2]);
    let height = heightTriangle(values[0], values[1])
    let area = areaTriangulo(values[2],height)

    


    alert(`Tú triángulo es ${type} y tiene un area de ${area}`)
    
}




