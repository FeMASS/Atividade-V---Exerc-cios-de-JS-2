// Calculo de fatorial
/* Edilson Alzemand */

function fatorial(){

	var num1;
	var result;
	var fat;

	num1 = document.getElementById('num1').value;

	if (num1==0){
		result= "1";

	} else if(num1==1){
		result="1";

	}else{

	for(result = 1; num1 > 1; num1 = num1 - 1){
	result = result * num1;
		}
	}

	document.getElementById("result").value = result;
}
