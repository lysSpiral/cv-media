console.log('Connexion js établie - general script');

function switchImg(imgId){
	var img = document.getElementById(imgId);
	//console.log('previous : '+img.getAttribute('src'));
	img.src = (img.src.match('img/plus.png')) ? 'img/minus.png' : 'img/plus.png';
	// console.log('new : '+img.getAttribute('src'));
	//console.log('switchImg');
}