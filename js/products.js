//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});
var productsArray = [];

function showProductsList(array) {
    var htmlcontenidos = "";
    for (let aux = 0; aux < array.length; aux++) {
        //moverse por el array
        var product = array[aux];
        //obtencion de los datos desglosados.
        htmlcontenidos += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name + `</h4>
                        <small class="font-muted">` + product.currency + " $" + product.cost + `<br> `+ product.soldCount + ` artículos vendidos </small>                    
                     </div>
                     ${product.description}
                 </div>
             </div>
         </div>
        `
        // devolucion de los datos return
        document.getElementById("prod-list-container").innerHTML = htmlcontenidos;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            showProductsList(productsArray);
        }
    });
});