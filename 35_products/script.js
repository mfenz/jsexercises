let products = [];

function onAddProduct(event){
    event.preventDefault();
    
    // Daten aus dem Formular einlesen
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;

    // To do ... Formularvalidierung
    let errors = [];


    // Produkt nur anlegen wenn keine Fehler aufgetreten sind
    if(errors.length == 0){
        // Objekt der Klasse Product erzeugen und in die Liste einfügen
        products.push(new Product(id, name, price));
        showProducts();
    } else {
        // Fehlermeldungen darstellen
    }
}

/**
 * Zeigt alle Produkte der Liste "products"
 * in der HTML-Tabelle an
 */
function showProducts(){
    let html = '';
    for(let i = 0; i < products.length; i++){
        let product = products[i];
        let tr = `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price} €</td>
            <td>
                <form>
                    <button data-id="${product.id}" class="bt_delete_product">Löschen</button>
                </form>
            </td>
        </tr>
        `;
        html += tr;
    }

    document.getElementById('products').innerHTML = html;
}

// Verknüpfe Button mit der Function
document
    .querySelector('[name=bt_add_product]')
    .addEventListener('click', onAddProduct);