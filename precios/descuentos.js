// const precioOriginal = 120;

// const descuento = 18;

// const porcentajeDescuento = 100 - descuento;

// const precioDescuento = (precioOriginal * porcentajeDescuento)/100

const getPrice = document.getElementById("inputPrice");
const getDiscount = document.getElementById("inputDiscount");
const newPrice = document.getElementById("newPrice")
const inputCupon = document.getElementById("inputCupon");

function hideInput(bool){
    if (bool) {
        getDiscount.hidden = bool;
    }
    
}

inputCupon.addEventListener("input", () => {
    hideInput(true)
})



function applyDiscount(){
    const cuponCodes = [
        {
        code: "1-c",
        discount: 15
        },
        {
        code: "2-c",
        discount: 20
        },
        {
        code: "3-c",
        discount: 25
        },
        {
        code: "4-c",
        discount: 30
        },
        {
        code: "5-c",
        discount: 35
        },
]
    //input del usuario
    const cuponValue = inputCupon.value;
    //input de descuento
    let discountValue = getDiscount.value;
    //input de precio
    const price = getPrice.value;
    
    //el cupón existe y aplica descuento
    if(cuponValue){
        //recorre los cupones
        cuponCodes.forEach((cupon) => {
            //compara cada codigo de cupon con el input del usuario
            if(cupon.code === cuponValue){
                //asigna un valor al descuento, dado que el usuario no ingresó ninguno
                discountValue = cupon.discount
            }
        })
    }

    
    console.log(discountValue)

    
    const porcentajeDescuento = 100 - discountValue;
    const precioDescuento = (price * porcentajeDescuento)/100

    newPrice.innerText = `El precio con descuento es ${precioDescuento}`;
    console.log(precioDescuento);
    
    return precioDescuento
      
};

