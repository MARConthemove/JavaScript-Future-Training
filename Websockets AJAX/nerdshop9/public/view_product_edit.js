const viewProductEdit = code => {
    const show = product => {
        // Ein- bzw. Ausblenden der Tabelle beim klicken von "EDIT"
        $('#product_list').style.display = 'none'
        $('#product_edit').style.display = 'block'

        // ejs.render -> verwende EJS ab hier! + Object übergeben... -> render(htmlText+EJS Platzhalter, OBJECT)
        $('#product_edit').innerHTML = ejs.render(
            `
      <form>
      <table>
        <tr>
          <td class="formfield">code</td>
          <td>
            <input type="text" size="60" id="code" value="<%= product.code %>"
              <% if (product.code) { %> disabled <% } %>
              pattern="[A-Z0-9]+"
              title="Ziffern und Großbuchstaben"
              required
            >
          </td>
        </tr>
        <tr>
          <td class="formfield">shortdesc</td>
          <td><input type="text" size="60" id="shortdesc" value="<%= product.shortdesc %>"></td>
        </tr>
        <tr>
          <td class="formfield">tagline</td>
          <td><input type="text" size="60" id="tagline" value="<%= product.tagline %>"></td>
        </tr>
        <tr>
          <td class="formfield">quantity</td>
          <td><input type="number" min="0" id="quantity" value="<%= product.quantity %>"></td>
        </tr>
        <tr>
          <td class="formfield">price</td>
          <td><input type="number" min="0.00" step="0.01" id="price" value="<%= product.price %>"></td>
        </tr>
        <tr>
          <td style="border: none"></td>
          <td style="border: none"><input type="submit" value="submit"></td>
        </tr>
      </table>
      </form>
      `,
            { product },
        )

        $('form').addEventListener('submit', ev => {
            fetch('/product/', {
                // entweder update oder create
                method: product.code ? 'PUT' : 'POST',
                // -> Informationen sind json()
                headers: { 'Content-Type': 'application/json' },
                // stringify -> aus javascript object, array, etc. json() erstellen
                body: JSON.stringify({
                    code: $('#code').value,
                    shortdesc: $('#shortdesc').value,
                    tagline: $('#tagline').value,
                    quantity: $('#quantity').value,
                    price: $('#price').value,
                }),
            }).then(() => viewProductList())
            ev.preventDefault()
        })
    }

    if (code) {
        fetch('/product/' + code)
            .then(res => res.json())
            .then(product => show(product))
    } else {
        show({})
    }
}
