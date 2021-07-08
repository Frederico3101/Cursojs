function verificar() {
  var valor = document.querySelector('#txtvalor')
  var vInteiro = Number.parseInt(valor.value)
  var vReal = Number.parseFloat(valor.value)

  var v50 = document.querySelector('#v50')
  var v10 = document.querySelector('#v10')
  var v5 = document.querySelector('#v5')

  var qntdCinquenta = vInteiro / 50
  if (qntdCinquenta >= 1) {
    v50.innerHTML += `Total de ${Number.parseInt(qntdCinquenta)} cédulas de 50`
  }

  var resto50 = vInteiro % 50

  var qntdDez = resto50 / 10
  if (qntdDez >= 1) {
    v10.innerHTML = `Total de ${Number.parseInt(qntdDez)} cédulas de 10`
  }

  var resto10 = vInteiro % 10

  var qntdCinco = resto10 / 5
  if (qntdCinco >= 1) {
    v5.innerHTML = `Total de ${Number.parseInt(qntdCinco)} cédulas de 5`
  }

  var restoTot = Number.parseInt(vInteiro / 5)
  var restoTotal = vReal - restoTot * 5
  var restoTotalOficial = restoTotal.toFixed(2)
  if (restoTotalOficial > 0) {
    resto.innerHTML = `Resto: ${restoTotalOficial}`
  }

  //Limpar texto
  document.querySelector('#txtvalor').value = ''
}

// Number.parseInt ou Number.parseFloat
