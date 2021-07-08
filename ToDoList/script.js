    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')
    var atividades = [];

function adicionar () {
    const atv = document.getElementById('fazer').value;
    atividades.push(atv)
    if (atv.length == 0) {
        window.alert('Verifique os dados.')
    } else {
    res.innerHTML += `${atv} <button id="feito" onclick="terminado()">V</button> <button id="tirar" onclick="retirado()">X</button></br>`
    var retirar = atividades.indexOf(atv)
    var tarefa = atividades[retirar] = 0
    atv.focus()
    atv = ''
    }
}

function retirado() {
    res.innerHTML = ''
}

function terminado () {
    res.style.background = 'green'
}




