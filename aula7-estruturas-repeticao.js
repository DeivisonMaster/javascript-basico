/* Estruturas de repetição */

/* Estruturas condicionais */

/*
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
*/

/***********************************************************/
var convidados = [
	{
		nome: 'Pedro',
		idade: 20,
		bebeRefrigerante: false,
		bebeCerveja: false
	},
	{
		nome: 'Maria',
		idade: 17,
		bebeRefrigerante: true,
		bebeCerveja: false
	},
	{
		nome: 'João',
		idade: 19,
		bebeRefrigerante: true,
		bebeCerveja: true
	}
]

var comprarCerveja = false;

if(convidados[0].bebeCerveja){
	comprarCerveja = true;
}

console.log(convidados.length)

//console.log(comprarCerveja);

/* FOR */
/*
for(var i = 0; i < convidados.length; i++){
	console.log(convidados[i].nome, convidados[i].bebeCerveja)

	if(convidados[i].bebeCerveja){
		comprarCerveja = true;
		break;
	}
}
*/

/***********************************************************/
/* While */
var i = 0;

while(i < convidados.length){
	console.log(convidados[i].nome, convidados[i].bebeCerveja)

	if(convidados[i].bebeCerveja){
		comprarCerveja = true;
		break;
	}
	i++;
}



