
$(document).ready(function() {
	$('select').material_select();
});




function angry() {
	var nome;
	var mensagem;
	nome = document.getElementById('nome').value;
	mensagem=(" puto demais!");
	voz = nome + ", " + mensagem;
	document.getElementById("mensagem").innerHTML=voz;
	document.getElementById('myImage').src='img/angry.png'
}



function bored() {
	var nome;
	var mensagem;
	nome = document.getElementById('nome').value;
	mensagem=(" tédio demais!");
	voz = nome + ", " + mensagem;
	document.getElementById("mensagem").innerHTML=voz;
	document.getElementById('myImage').src='img/bored.png'
}



function happy() {
	var nome;
	var mensagem;
	nome = document.getElementById('nome').value;
	mensagem=(" Feliz demais !");
	voz = nome + ", " + mensagem;
	document.getElementById("mensagem").innerHTML=voz;
	document.getElementById('myImage').src='img/happy.png'
}


function in_love() {
	var nome;
	var mensagem;
	nome = document.getElementById('nome').value;
	mensagem=(" Apaixonado demais!");
	voz = nome + ", " + mensagem;
	document.getElementById("mensagem").innerHTML=voz;
	document.getElementById('myImage').src='img/in-love.png'
}

function sad() {
	var nome;
	var mensagem;
	nome = document.getElementById('nome').value;
	mensagem=(" triste esse lugar");
	voz = nome + ", " + mensagem;
	document.getElementById("mensagem").innerHTML=voz;
	document.getElementById('myImage').src='img/sad.png'
}


$("#selecao").on('change', function(e){
  var itemSelecionado = ($(this).val())
  // return alert(itemSelecionado);
	if (itemSelecionado == 'triste'){
			sad();
	}
	else if (itemSelecionado == 'tedio'){
			bored();
	}
	else if (itemSelecionado == 'puto'){
			angry();
	}
	else if (itemSelecionado == 'feliz'){
			happy();
	}
	else if (itemSelecionado == 'apaixonado'){
			in_love();
	}
	else{}
});
