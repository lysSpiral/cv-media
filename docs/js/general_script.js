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
		console.log("openCollapseVar");
		console.log(location.hash);
  	location.hash && $('#collapse'+location.hash.substring(1)+ '.collapse').collapse('show');
  	console.log('plus'+location.hash.substring(9));
	 (document.getElementById('plus'+location.hash.substring(1)) !== null) ?   	document.getElementById('plus'+location.hash.substring(1)).src = 'img/minus.png' : console.log("pas de signe");
  	
	});
}

function closeCollapseAll() {
	var collapseList=document.querySelectorAll('.collapse');
	console.log(collapseList.length);
	collapseList.forEach (function(element) {
			console.log(element.id);
			console.log(element.id.substring(8));
			console.log('plus'+element.id.substring(8));
			$('#'+element.id+'.collapse').collapse('hide');
			document.getElementById('plus'+element.id.substring(8)).src = 'img/plus.png';
		}
		);
	//$('#collapse'+'LecturePub'+'.collapse').collapse('hide')
}

function openCollapseSamePage(sectionId) {
	// FERMER TOUTES LES SECTIONS
	closeCollapseAll();

	// OUVRIR LA SECTION PASSEE EN PARAMETRE
	$('#collapse'+sectionId.substring(1)+ '.collapse').collapse('show');
  	console.log(sectionId);
  	console.log('plus'+sectionId.substring(1));
  	 (document.getElementById('plus'+sectionId.substring(1)) !== null) ?   	document.getElementById('plus'+sectionId.substring(1)).src = 'img/minus.png' : console.log("pas de signe");
	 
  	
}


