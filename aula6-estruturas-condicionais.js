/* Estruturas condicionais */

var comprarRefrigerante = false;
var comprarCerveja = false;
var comprarSucoNatural = false;

var convidado = {
	nome: 'pedro',
	idade: 17,
	bebeCerveja: true,
	bebeRefrigerante: false
}


if(convidado.bebeRefrigerante){
	comprarRefrigerante = true;
}else if(convidado.bebeCerveja && convidado.idade >= 18){
	comprarCerveja = true;
}else{
	comprarSucoNatural = true;
}

console.log(comprarSucoNatural);


