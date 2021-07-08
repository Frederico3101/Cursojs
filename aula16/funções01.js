// Funções são ações executadas assim que são chamadas ou em decorrência de um evento.
// Uma função pode receber parâmetros e retornar um resultado.

/*
function ação (parâmetro) {
    return res
}

ação(5) -> parâmetro passa a valer 5
*/

function parimp(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
let res = parimp(11)
console.log(res)
//ou
console.log(parimp(4))