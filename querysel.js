function hazclic()
{
	var elem=document.querySelector("#principal p:first-child");
	elem.addEventListener('click', mostrarAlerta);
}

function mostrarAlerta()
{
	alert('¡Has hecho clic!');
}

addEventListener('load', hazclic);
