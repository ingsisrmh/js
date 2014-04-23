function hazclic()
{
	var elem=document.getElementsByTagName('p')[0];
	elem.addEventListener('click', mostrarAlerta);
}

function mostrarAlerta()
{
	alert('¡Has hecho clic!');
}

addEventListener('load', hazclic);
