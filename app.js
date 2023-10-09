var stat = [
	'Vigor' , 
	'Fortitude',
	'Vitalidade',
	'Conhecimento',
	'Força',
	'Destreza',
	'Resistencia',
	'inteligencia',
	'fé'
	];


function alerta(){

	var randomname = Math.floor(Math.random()  * stat.length);
 


	document.getElementById('pica').innerHTML = '';
	document.getElementById('pica').innerHTML = stat[randomname];
}