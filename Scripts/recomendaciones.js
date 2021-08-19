class Computadora {
    constructor(tipo, precio){
        this.tipo = tipo;
        this.precio = precio;
    }
    recomendar(){
        if (this.tipo = "gamer" && this.precio < 100000){
            alert("te recomiendo un ryzen 5 o Athlon 3000G con graficos integrados y en un futuro poner una grafica dedicada");
            console.log("te recomiendo un ryzen 5 o Athlon 3000G con graficos integrados y en un futuro poner una grafica dedicada");

        } else if (this.tipo = "gamer" && this.precio > 100000 && this.precio < 150000){
            alert("te recomiendo un Ryzen 5 o Intel Core I5 con una grafica gama media/baja");
            console.log("te recomiendo un Ryzen 5 o Intel Core I5 con una grafica gama media/baja");

        } else if (this.tipo = "gamer" && this.precio > 150000 && this.precio < 200000){
            alert("te recomiendo un Ryzen 5 o Intel Core I5 con una grafica gama media");
            console.log("te recomiendo un Ryzen 5 o Intel Core I5 con una grafica gama media");

        } else if (this.tipo = "gamer" && this.precio > 200000){
            alert("te recomiendo un Ryzen 7 o Intel Core I7 y una grafica gama media/alta");
            console.log("te recomiendo un Ryzen 7 o Intel Core I7 y una grafica gama media/alta");

        } else if (this.tipo = "edicion" && this.precio < 100000){
            alert("te recomiendo seguir ahorrando");
            console.log("te recomiendo seguir ahorrando");

        } else if (this.tipo = "edicion" && this.precio > 100000 && this.precio < 150000){
            alert("te recomiendo un Ryzen 5 o Intel Core I5 con una grafica con 6 o 4 GB de vram");
            console.log("te recomiendo un Ryzen 5 o Intel Core I5 con una grafica con 6 o 4 GB de vra");

        } else if (this.tipo = "edicion" && this.precio > 150000 && this.precio < 200000){
            alert("te recomiendo un Ryzen 5 o Intel Core I5 con una grafica con 6 o 8 GB de vram");
            console.log("te recomiendo un Ryzen 5 o Intel Core I5 con una grafica con 6 o 8 GB de vram");

        } else if (this.tipo = "edicion" && this.precio > 200000){
            alert("te recomiendo un Ryzen 7 o Intel Core I7 y una grafica con mas de 8 GB de vram");
            console.log("te recomiendo un Ryzen 7 o Intel Core I7 y una grafica con mas de 8 GB de vram");

        } else {
            alert("Datos incorrectos vuelva a interetarlo");
        }
    }
}
let tipoPc = prompt("ingrese el tipo de la pc que busca: (gamer o edicion)");

let precioPc = prompt("ingrese presupuesto disponible en pesos Argentinos:");

let Recomendacion = new Computadora(tipoPc, precioPc);

Recomendacion.recomendar();
