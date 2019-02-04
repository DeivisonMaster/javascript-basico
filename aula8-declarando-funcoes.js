/* Declarando funções */

// peso / (altura * altura)

function imc(peso, altura){
	return peso / (altura * altura);
}

var pessoas = [
	{
		nome: 'pedro',
		altura: 1.83,
		peso: 80
	},
	{
		nome: 'maria',
		altura: 1.83,
		peso: 90
	},
	{
		nome: 'joão',
		altura: 2.00,
		peso: 100
	}
]

for(var pessoa of pessoas){
	var resultado = imc(pessoa.peso, pessoa.altura);

	console.log(pessoa.nome, resultado);
}

var resultado = imc(peso, altura);
console.log(resultado);