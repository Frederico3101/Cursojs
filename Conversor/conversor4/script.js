function calcular() {
  var res = document.querySelector('#res')
  var tempIni = document.getElementsByName('tempIni')
  var tempFi = document.getElementsByName('tempFi')
  var temptxt = document.getElementById('temptxt')
  var temp = Number(temptxt.value)

  var celcKelv = temp + 273
  var celcFare = (temp * 9) / 5 + 32

  var kelvCelc = temp - 273
  var kelvFare = ((temp - 273) * 9) / 5 + 32

  var fareCelc = ((temp - 32) * 5) / 9
  var fareKelv = (5 * temp - 160) / 9 + 273

  // Descartar temperaturas abaixo de 0K
  // Caso não seja digitado um valor
  if (temptxt.value.length == 0) {
    alert('[ERRO] DIGITE UM VALOR')
  } else {
    if (tempIni[0].checked && tempFi[2].checked) {
      if (temp < -273) {
        alert('Essa temperatura não existe')
      } else {
        res.innerHTML = `${temp}°C corresponde a ${celcKelv}K`
      }
    } else if (tempIni[0].checked && tempFi[1].checked) {
      if (temp < -273) {
        alert('Essa temperatura não existe')
      } else {
        res.innerHTML = `${temp}°C corresponde a ${celcFare}°F`
      }
    } else if (tempIni[2].checked && tempFi[0].checked) {
      if (temp < 0) {
        alert('Essa temperatura não existe')
      } else {
        res.innerHTML = `${temp}K corresponde a ${kelvCelc}°C`
      }
    } else if (tempIni[2].checked && tempFi[1].checked) {
      if (temp < 0) {
        alert('Essa temperatura não existe')
      } else {
        res.innerHTML = `${temp}K corresponde a ${kelvFare}°F`
      }
    } else if (tempIni[1].checked && tempFi[0].checked) {
      if (temp < -459.4) {
        alert('Essa temperatura não existe')
      } else {
        res.innerHTML = `${temp}°F corresponde a ${fareCelc}°C`
      }
    } else if (tempIni[1].checked && tempFi[2].checked) {
      if (temp < -459.4) {
        alert('Essa temperatura não existe')
      } else {
        res.innerHTML = `${temp}°F corresponde a ${fareKelv}°K`
      }
    } else if (
      (tempIni[0].checked && tempFi[0].checked) ||
      (tempIni[1].checked && tempFi[1].checked) ||
      (tempIni[2].checked && tempFi[2].checked)
    ) {
      alert('[ERRO] COLOQUE UNIDADES DIFERENTES!')
    }
  }
  // Limpar input
  document.querySelector('#temptxt').value = ''
}

// DarkMode

function ativar() {
  document.body.style.background = 'black'
  document.body.style.color = 'white'
}

function desativar() {
  document.body.style.background = 'whitesmoke'
  document.body.style.color = 'black'
}
