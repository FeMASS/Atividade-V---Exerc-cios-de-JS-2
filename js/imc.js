

function imc(){
	var altura;
	var peso;
	var resultado;
	var quadrado;

	altura=parseFloat(document.querySelector("#altura").value);
	peso=parseFloat(document.querySelector("#peso").value);

	quadrado=altura*altura;

	resultado=(peso/quadrado);

if(resultado<18.5){
	document.getElementById('resultado').value = resultado;
	alert("Abaixo do peso" + resultado);
}
else if(resultado>=18.5 && resultado<24.9){
	document.getElementById('resultado').value = resultado;
	alert("	Peso de ideal " + resultado);
}

else if(resultado>=25 && resultado<29.9) {
	document.getElementById('resultado').value = resultado;
	alert("Levemente acima do peso " + resultado);
}
else if(resultado>=30 && resultado<34.9) {
	document.getElementById('resultado').value = resultado;
	alert("Obsidade grau I " + resultado);
}
else if(resultado>=35 && resultado<39.9){
	document.getElementById('resultado').value = resultado;
	alert("obesidade Grau II")
}
else if (resultado>40){
	document.getElementById('resultado').value = resultado;
	alert("Mórbida " + resultado);

}




}
