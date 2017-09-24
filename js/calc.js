// Calculo de fatorial
/* Edilson Alzemand */

function roda(){
	var tam1 = letamanho();
	for(var i=1;i<=tam1;i++){
       //var a='';
       var a=" ";
       document.getElementById('result').value = document.getElementById('result').value + "\n";
       for(var j=1;j<=i;j++){
       	var a=a+' '+i;
       }
       document.getElementById('result').value = document.getElementById('result').value + a;
   }
}

function letamanho(){
	var tamanho = document.getElementById('num1').value;
	return tamanho;
}

function limpa()
{
	document.getElementById('result').value = ""
}
