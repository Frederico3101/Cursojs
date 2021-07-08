function verificar () {
    var temp = window.document.getElementById('num');
    var n = Number(temp.value);
    var res = window.document.getElementById('res');
    var k = n + 273
    var f = (n*9/5) - 32
    if (k < 0) {
        res.innerHTML = 'Essa temperatura não existe'
    } else {
        res.innerHTML = `${n}°C é igual a ${k}K e ${f}°F`
    }
}