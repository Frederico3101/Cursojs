var agora = new Date();
var hora = agora.getHours() //Ver a hora do sistema que está rodando

if (hora == 1) {
console.log(`Agora é exatamente uma hora da manhã.`)
} else if (hora == 0 || hora == 24 || hora == 00) {
    console.log(`Agora é exatamente meia-noite.`)
} else {
    console.log(`Agora são exatamente ${hora} horas.`)
}


if (hora < 12) {
    console.log ('Bom dia!')
} else if (hora <= 18) {
    console.log ('Boa tarde!')
} else {
    console.log ('Boa noite!')
}
    