
function bissexto(){

	var num1;
	var result;

	num1 = document.getElementById('ano').value;

	if ((num1 % 4 == 0) && ((num1 % 100 != 0) || (num1 % 400 == 0))) {
		result = "bissexto";
	} else{
		result="não é bissexto";
	}

	document.getElementById("resultado").innerHTML = result;

}
