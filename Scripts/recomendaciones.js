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
​
    filtrarTabla(arrayFiltrado);
}
