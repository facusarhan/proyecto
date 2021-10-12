$(document).ready(function(){
    //caputuras de los eventos click de los botones
    $("#btnPresupuestos").click(()=> $("#section-index").fadeIn());
    $("#btnEsconder").click(()=> $("#section-index").fadeOut());

    let cuerpoTabla = $("#cuerpo_tabla");
    
    // funcion para armar la tabla del array filtrado
    function filtrarTabla(array){
        array.forEach(producto => {
            let fila = document.createElement("tr");
            fila.innerHTML = `<td>${producto.tipo}</td><td>$${producto.precio}</td><td>${producto.componentes}</td>`
            cuerpoTabla.append(fila);
        })
    }

    let elegirPorqueFiltrar = document.querySelectorAll('input[type="radio"]');

    elegirPorqueFiltrar.forEach(check => check.addEventListener("change", handleChange));

    elegirPorqueFiltrar.forEach(check => check.addEventListener("change", recomendacion));

    let arrayFiltrado = [];

    //funciones para filtar el array de listaPcs
    function handleChange () {
        cuerpoTabla.innerHTML = "";
        const checkeds = Array.from(elegirPorqueFiltrar).filter(check => check.checked);
        const checkedValue = checkeds.map(check => check.value);
        if(checkedValue == "gamer"){
            arrayFiltrado = listaPcs.filter(producto => producto.tipo == "gamer");
        }else if (checkedValue == "edicion"){
            arrayFiltrado = listaPcs.filter(producto => producto.tipo == "edicion");
        }else if(checkedValue == "estudiante"){
            arrayFiltrado = listaPcs.filter(producto => producto.tipo == "estudiante");
        }
    }

    function recomendacion (){
        cuerpoTabla.innerHTML = "";
        const checkeds = Array.from(elegirPorqueFiltrar).filter(check => check.checked);
        const checkedValue = checkeds.map(check => check.value);
        let arrayFiltrado1 = [];
        if(checkedValue == "150"){
            arrayFiltrado1 = arrayFiltrado.filter(producto => producto.precio <= 150000);
        }else if (checkedValue == "300"){
            arrayFiltrado1 = arrayFiltrado.filter(producto => producto.precio > 150000 && producto.precio < 300000);
        }else if(checkedValue == "301"){
            arrayFiltrado1 = arrayFiltrado.filter(producto => producto.precio > 300000);
        }
        filtrarTabla(arrayFiltrado1);
    }
});
