const viewProductList = () => {
    // fetching data from root /product/
    fetch('/product/')
        // to make the res "body" object accessabel -> we need to convert the promise into .json format
        .then(res => res.json())
        // Codes / IDs -> Geh über alle Einträge Json und schicke sie an den server als /product/code
        .then(codes => Promise.all(codes.map(c => fetch('/product/' + c))))
        // Objekte wieder in Json umwandeln
        .then(res => Promise.all(res.map(r => r.json())))
        // Aufruf show funktion mit Rückgabewert von fetch(product)
        .then(products => show(products))

        // zeile 7, 9 braucht Promise.all da wir innerhalb der Kette nicht mit .then() arbeiten!


    const show = products => {
        // Anzeige von Tabelle
        $('#product_list').style.display = 'block'
        $('#product_edit').style.display = 'none'

        $('#product_list').innerHTML = ejs.render(
            `
      <table>
        <tr>
          <th>action</th>
          <th>code</th>
          <th>shortdesc</th>
          <th>tagline</th>
          <th class="number">quantity</th>
          <th class="number">price</th>
          <th>stockwarn</th>
        </tr>
        <% products.forEach( product => { %>
          <tr>
            <td><a id="edit_<%= product.code %>"   href="#">edit</a>
                <a id="delete_<%= product.code %>" href="#">delete</a></td>
            <td><%= product.code %></td>
            <td style="width: 30%"><%= product.shortdesc %></td>
            <td style="width: 25%"><%= product.tagline %></td>
            <td class="number"><%= product.quantity %></td>
            <td class="number"><%= product.price %></td>
            <td><%= product.stockwarn %></td>
          </tr>
        <% }); %>
      </table>
      <p>
        <a id="add" href="#">add new product</a>
      </p>
      `,
            // wofür ist dieses object ?
            { products },
        )

        $('#add').addEventListener('click', ev => {
            viewProductEdit()
            // <a id="add" href="#">add new product</a> -> Funktioniert so nicht. Browser soll die Seite nicht neu laden
            ev.preventDefault()
        })

        products.forEach(product => {
            $('#edit_' + product.code).addEventListener('click', ev => {
                viewProductEdit(product.code)
                ev.preventDefault()
            })

            $('#delete_' + product.code).addEventListener('click', ev => {
                if (confirm(`Delete product '${product.code}'?`)) {
                    fetch('/product/' + product.code, {
                        method: 'DELETE',
                        }).then(() => viewProductList())
                }
                ev.preventDefault()
            })
        })
    }
}
