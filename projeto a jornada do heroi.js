const prompt = require ("prompt-sync")();

console.clear()

console.log("História\nUm mecânico de helicópteros estava fazendo a manutenção no motor de um jaguar,\nquando de repente começou a chover muito e ventar muito forte.\nUm outro helicóptero chamado pantera estava do lado de fora na pista,\no mecânico vendo a situação tentou correr para amarrar as pás do pantera,\nmas não deu tempo e ele acabou tombando e sendo arrastado com o vento.")

console.log()

let n1 = prompt ('O mecânico fazia manutenção em um Jaguar? ')
let n2 = prompt ('Começou a ventar e chover muito forte? ')
let n3 = prompt ('Havia algum hellicóptero na pista? ')
let n4 = prompt ('O mecanico tentou correr para o helicoptero na pista? ')
let n5 = prompt ('O helicóptero que tombou era um pantera? ')

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

if (n1+n2+n3+n4+n5==5){
    console.log ('VOCÊ É UM GENIO, ACERTOU TODAS!')
} else if (n1+n2+n3+n4+n5==4) {
    console.log ('UAU, VOCÊ É DEMAIS, ERROU APENAS UMA!') 
} else if (n1+n2+n3+n4+n5==3) {
    console.log ('VOCÊ FICOU NO MEIO TERMO, ERROU APENAS DUAS!')
} else if (n1+n2+n3+n4+n5==1 || n1+n2+n3+n4+n5==2) {
    console.log ('PARECE QUE VOCÊ NÃO PRESTOU TANTA ATENÇAO!')
} else {
    console.log ('CHUTOU O BALDE, ERROU TODAS!')
}