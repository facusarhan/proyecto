
$(document).ready(function(){

    /* function completarTabla(){
        listaPcs.forEach(producto => {
            let fila = document.createElement("tr");
            fila.innerHTML = `<td>${producto.tipo}</td><td> $${producto.precio}</td><td>${producto.componentes}</td>`
            $("#cuerpo_tabla").append(fila);
        })
    }
    completarTabla(); */
    
    function filtrarTabla(array){
        array.forEach(producto => {
            let fila = document.createElement("tr");
            fila.innerHTML = `<td>${producto.tipo}</td><td>$${producto.precio}</td><td>${producto.componentes}</td>`
            $("#cuerpo_tabla").append(fila);
        })
    }

    let elegirPorqueFiltrar = document.querySelectorAll('input[type="radio"]');
    
    function recomendaciones () {
        const checkeds = Array.from(elegirPorqueFiltrar).filter(check => check.checked);
        const checkedValue = checkeds.map(check => check.value);
        let arrayFiltrado = [];
        if(checkedValue == "gamer"){
            arrayFiltrado = listaPcs.filter(producto => producto.tipo == "gamer");
        }else if (checkedValue == "edicion"){
            arrayFiltrado = listaPcs.filter(producto => producto.tipo == "edicion");
        }else if(checkedValue == "estudiante"){
            arrayFiltrado = listaPcs.filter(producto => producto.tipo == "estudiante");
        }
        filtrarTabla(arrayFiltrado);
    }

    elegirPorqueFiltrar.forEach(check => check.addEventListener("change", recomendaciones));

    $("#vaciar").on("click", (arrayFiltrado).innerHTML = ""); // nose como hacer que vacie el array que me queda para que no me sobre escriba 
    
});




