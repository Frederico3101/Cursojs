function calcular() {
  var num1 = document.getElementById('txtnum1')
  var num2 = document.getElementById('txtnum2')
  var res = document.getElementById('res')
  var n1 = Number(num1.value)
  var n2 = Number(num2.value)
  var operator = document.getElementsByName('escolha')
  if (operator[0].checked) {
    var solution = n1 + n2
    res.innerHTML = solution
  } else if (operator[1].checked) {
    var solution1 = n1 - n2
    res.innerHTML = solution1
  } else if (operator[2].checked) {
    var solution2 = n1 * n2
    res.innerHTML = solution2
  } else if (operator[3].checked) {
    var solution3 = n1 / n2
    res.innerHTML = solution3
  }
}