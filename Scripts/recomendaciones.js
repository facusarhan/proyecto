
$(document).ready(function(){

    let cuerpoTabla = $("#cuerpo_tabla");
    
    function filtrarTabla(array){
        array.forEach(producto => {
            let fila = document.createElement("tr");
            fila.innerHTML = `<td>${producto.tipo}</td><td>$${producto.precio}</td><td>${producto.componentes}</td>`
            cuerpoTabla.append(fila);
        })
    }

    let elegirPorqueFiltrar = document.querySelectorAll('input[type="radio"]');
    
    function recomendaciones () {
        cuerpoTabla.innerHTML = "";
        let arrayFiltrado = [];
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
        let arrayFiltrado2 = [];
        if(checkedValue == "150"){
            arrayFiltrado2 = arrayFiltrado1.filter(producto => producto.precio < 150000);
        }else if (checkedValue == "300"){
            arrayFiltrado2 = arrayFiltrado1.filter(producto => producto.precio < 300000);
        }else if(checkedValue == "301"){
            arrayFiltrado2 = arrayFiltrado1.filter(producto => producto.precio > 300000);
        }
        filtrarTabla(arrayFiltrado2);    
    }

    elegirPorqueFiltrar.forEach(check => check.addEventListener("change", recomendaciones));

});
