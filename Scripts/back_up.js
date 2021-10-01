let cuerpoTabla = document.getElementById("cuerpo_tabla");

function completarTabla(){
    listaPcs.forEach(producto => {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${producto.tipo}</td><td> $${producto.precio}</td><td>${producto.componentes}</td>`
        cuerpoTabla.appendChild(fila);
    })
}
completarTabla();

function filtrarTabla(array){
    array.forEach(producto => {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td>${producto.tipo}</td><td>$${producto.precio}</td><td>${producto.componentes}</td>`
        cuerpoTabla.appendChild(fila);
    })
}

let elegirPorqueFiltrar = document.querySelectorAll('input[type="radio"]');

//elegirPorqueFiltrar.forEach(check => console.log(check));

elegirPorqueFiltrar.forEach(check => check.addEventListener("change", handleChange));


function handleChange () {
    cuerpoTabla.innerHTML = "";
    let arrayFiltrado1 = [];
    const checkeds = Array.from(elegirPorqueFiltrar).filter(check => check.checked);
    const checkedValue = checkeds.map(check => check.value);
    if(checkedValue == "gamer"){
        arrayFiltrado1 = listaPcs.filter(producto => producto.tipo == "gamer");
    }else if (checkedValue == "edicion"){
        arrayFiltrado1 = listaPcs.filter(producto => producto.tipo == "edicion");
    }else if(checkedValue == "estudiante"){
        arrayFiltrado1 = listaPcs.filter(producto => producto.tipo == "estudiante");
    }
    filtrarTabla(arrayFiltrado1);
}



function recomendacion1 () {
    cuerpoTabla.innerHTML = "";
    let arrayFiltrado2 = [];
    const checkeds = Array.from(elegirPorqueFiltrar).filter(check => check.checked);
    const checkedValue = checkeds.map(check => check.value);
    if(checkedValue == "150"){
        arrayFiltrado2 = arrayFiltrado1.filter(producto => producto.precio < 150000);
    }else if (checkedValue == "300"){
        arrayFiltrado2 = arrayFiltrado1.filter(producto => producto.precio < 300000);
    }else if(checkedValue == "301"){
        arrayFiltrado2 = arrayFiltrado1.filter(producto => producto.precio > 300000);
    }
    filtrarTabla(arrayFiltrado2);
}


