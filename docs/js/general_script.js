console.log('Connexion js établie - general script');
openCollapse();



function switchImg(imgId){
	var img = document.getElementById(imgId);
	//console.log('previous : '+img.getAttribute('src'));
	img.src = (img.src.match('img/plus.png')) ? 'img/minus.png' : 'img/plus.png';
	// console.log('new : '+img.getAttribute('src'));
	//console.log('switchImg');
}

function openCollapse() {
	document.addEventListener("DOMContentLoaded", function () {
		//console.log("openCollapseVar");
		//console.log(location.hash);
  	location.hash && $('#collapse'+location.hash.substring(1)+ '.collapse').collapse('show');
  	//console.log('plus'+location.hash.substring(9))
	 (document.getElementById('plus'+location.hash.substring(1)) !== null) ?   	document.getElementById('plus'+location.hash.substring(1)).src = 'img/minus.png' : console.log("pas de signe");
  	
	});
}



