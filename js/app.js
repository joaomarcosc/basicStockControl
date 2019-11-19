class App {
  // Creating products with input value
  addProduct() {
    event.preventDefault()
    let type = document.querySelector('select[name="productType"]').value
    let value = Number(document.querySelector('input[name="value"]').value / 100)
    let name = document.querySelector('input[name="name"]').value
    let quantity = document.querySelector('input[name="quantity"]').value

    let product = new Product(type, value, name, quantity)
    this.addOnTable(product)
    this.cleanForm()
  }

  // Add input in table
  addOnTable(product) {
    let row = document.createElement('tr')
    let firstColumn = document.createElement('td')
    let secondColumn = document.createElement('td')
    let thirdColumn = document.createElement('td')
    let fourColumn = document.createElement('td')
    let fiveColumn = document.createElement('td')

    firstColumn.innerText = product.name
    secondColumn.innerText = product.type
    thirdColumn.innerText = product.quantity
    fourColumn.innerText = product.value += ' R$'

    let buttonToRemove = this.removeButton()

    fiveColumn.appendChild(buttonToRemove)

    row.appendChild(firstColumn)
    row.appendChild(fourColumn)
    row.appendChild(secondColumn)
    row.appendChild(thirdColumn)
    row.appendChild(fiveColumn)

    document.getElementById('myTable').appendChild(row)
  }
  // Creating button to remove row
  removeButton() {
    let button = document.createElement('button')
    button.type = 'button'
    button.setAttribute('onclick', 'app.toRemove(this)')
    button.setAttribute('class', 'btn btn-danger')
    button.innerText = 'Remover'

    return button
  }

  // Method to remove a specific row
  toRemove(button) {
    let columnToRemove = button.parentNode.parentNode
    columnToRemove.parentNode.removeChild(columnToRemove)
  }
  // Method to clean form
  cleanForm() {
    document.querySelector('input[name="name"]').value = ''
    document.querySelector('input[name="quantity"]').value = ''
  }
}