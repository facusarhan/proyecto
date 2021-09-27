
$(document).ready(function(){

    let cuerpoTabla = $("#cuerpo_tabla");
    
    function filtrarTabla(array){
        array.forEach(producto => {
            let fila = document.createElement("tr");
            fila.innerHTML = `<td>${producto.tipo}</td><td>$${producto.precio}</td><td>${producto.componentes}</td>`
            cuerpoTabla.append(fila);
        })
    }

    let arrayFiltrado = [];
    let elegirPorqueFiltrar = document.querySelectorAll('input[type="radio"]');
    
    function recomendaciones () {
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
        filtrarTabla(arrayFiltrado);
    }

    elegirPorqueFiltrar.forEach(check => check.addEventListener("change", recomendaciones));

});
