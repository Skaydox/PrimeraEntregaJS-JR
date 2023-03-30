let comprar = true
let seguir = false //Segunda etapa de la compra (Cuotas o efectivo)

let dinero = 300000
let dineroProducto = 0

function comprarProducto(){
    if(dinero >= dineroProducto){
        let confirmar = confirm("¿Comprar por "+dineroProducto+" ? | Tenes: "+dinero)
        if(confirmar){
        dinero -= dineroProducto
        alert("¡Gracias por comprar! :)\nDinero disponible: "+dinero)
        }
        seguir = false //No permite entrar en la seccion 'cuotas o efectivo' de nuevo hasta volver a seleccionar otro producto
    }else{
        alert("¡No tenes dinero suficiente! :(")
        seguir = false
    }
}

alert("¡Vendemos varios electrodomésticos!")

while(comprar) {
let producto = parseInt(prompt("¿Que queres comprar? (Elige un el número)\nTenes "+dinero+" pesos\n\n(1) Heladera 150.000$\n(2) Cocina 95.000$\n(3) Lavarropas 75.000$\n\n(4) Salir"))

if((producto === 1) || (producto === 2) || (producto === 3) || (producto === 4)){
        if(producto == 1){dineroProducto=150000 ;seguir=true}
        if(producto == 2){dineroProducto=95000 ;seguir=true}
        if(producto == 3){dineroProducto=75000 ;seguir=true}
        if(producto == 4){comprar = false}
        }else{
            alert("Opción incorrecta.")
        }

        if(seguir){
            let pagar = parseInt(prompt("¿Que medios de pago vas a usar?\n\n(1) Tarjeta (Hasta 6 cuotas sin interes)\n(2) Efectivo"))
            if(pagar === 1) {
                let cuotas = parseFloat(prompt("¿En cuantas cuotas lo vas a querer pagar?\nTenes: "+dinero+"\n\n(1) 1 cuota: "+dineroProducto+"\n(2) 2 cuotas: "+dineroProducto/2+"\n(3) 3 cuotas: "+dineroProducto+"\n(4) 4 cuotas: "+dineroProducto/4+"\n(5) 5 cuotas: "+dineroProducto/5+"\n(6) 6 cuotas: "+dineroProducto/6))
                switch(cuotas){
                    case 1:
                        dineroProducto = dineroProducto/1
                        comprarProducto()
                    break;

                    case 2:
                        dineroProducto = dineroProducto/2
                        comprarProducto()
                    break;

                    case 3:
                        dineroProducto = dineroProducto/3
                        comprarProducto()
                    break;

                    case 4:
                        dineroProducto = dineroProducto/4
                        comprarProducto()
                    break;

                    case 5:
                        dineroProducto = dineroProducto/5
                        comprarProducto()
                    break;

                    case 6:
                        dineroProducto = dineroProducto/6
                        comprarProducto()
                    break;
                    default:
                        alert("Numero de cuotas incorrecta.")
                        seguir = false
                }
            }
            if(pagar === 2) {
                comprarProducto()
            }

}
}