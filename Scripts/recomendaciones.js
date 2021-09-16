
$(document).ready(function(){
    
    const URLGET = "https://jsonplaceholder.typicode.com/posts"
    const infoPost = { tipo:"gamer", precio: 240000, componentes: "Ryzen 5 3600x|16gb de ram 3000mhz|Radeon rx 580 8gb|B450 ahorus elite|1TB hdd|240gb ssd|600w 80+|" }

    $("#lista").click( ()=> {
        $.ajax({
            method: "POST",
            url:  URLGET,
            data: infoPost,
            success: function(respuesta){
                console.log(respuesta);
                $("section").append(
                    `<div class="card">
                    <h5 class="card-header">Tipo: ${respuesta.tipo}</h5>
                    <div class="card-body">
                      <h5 class="card-title">Precio: $${respuesta.precio}</h5>
                      <h5 class="card-title">Componentes: |${respuesta.componentes}</h5>
                    </div>
                    </div>`);
            }
        });
    });
    
    $("#desplegar").click( ()=> $("#mark").slideDown("slow"));

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

});
