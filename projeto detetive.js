const prompt = require ("prompt-sync")();

console.clear()

let n1 = prompt ('Você é o assassino? ')
let n2 = prompt ('Você esteve com a vititma ontem? ')
let n3 = prompt ('Você era amigo da vititma? ')
let n4 = prompt ('Você conhecia a vitima? ')
let n5 = prompt ('Você discutiu com a vitima? ')

console.log()

if (n1=='sim'){n1=1}
else {n1=0}
if (n2=='sim'){n2=1}
else {n2=0}
if (n3=='sim'){n3=1}
else {n3=0}
if (n4=='sim'){n4=1}
else {n4=0}
if (n5=='sim'){n5=1}
else {n5=0}

if (n1+n2+n3+n4+n5>=4){
    console.log ('VOCÊ É CULPADO!')
} else if (n1+n2+n3+n4+n5==3) {
    console.log ('VOCÊ É SUSPEITO!')
}else {
    console.log ('VOCÊ É INOCENTE!')
}