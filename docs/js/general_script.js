console.log('Connexion js établie - general script');
openCollapse();


function switchImg(imgId){
	var img = document.getElementById(imgId);
	//console.log('previous : '+img.getAttribute('src'));
	img.src = (img.src.match('img/plus.png')) ? 'img/minus.png' : 'img/plus.png';
}

function switchTxt(txtId, txt1, txt2){
	var txt = document.getElementById(txtId);
	txt.innerHTML = (txt.innerHTML.match(txt1)) ? txt2 : txt1;
}

function openCollapse() {
	document.addEventListener("DOMContentLoaded", function () {
		console.log("openCollapseVar");
		console.log(location.hash, '#collapse'+location.hash.substring(1)+ '.collapse');
 	location.hash && $('#collapse'+location.hash.substring(1)+ '.collapse').collapse('show');
  	console.log('plus'+location.hash.substring(1));
	 (document.getElementById('plus'+location.hash.substring(1)) !== null) ?   	document.getElementById('plus'+location.hash.substring(1)).src = 'img/minus.png' : console.log("pas de signe");
  	
	});
}

function closeCollapseAll() {
	var collapseList=document.querySelectorAll('.collapse');
	//console.log(collapseList.length);
	collapseList.forEach (function(element) {
			$('#'+element.id+'.collapse').collapse('hide');
			document.getElementById('plus'+element.id.substring(8)).src = 'img/plus.png';
		}
		);
}

function closeCollapseAllButOne(sectionId) {
	var collapseList=document.querySelectorAll('.collapse');
	//console.log(collapseList.length);
	collapseList.forEach (function(element) {
		if (element.id !== sectionId) {
			$('#'+element.id+'.collapse').collapse('hide');
			document.getElementById('plus'+element.id.substring(8)).src = 'img/plus.png';
		}	
	}
	);
}

function openCollapseSamePageSub (sectionId) {
	 $('#collapse'+sectionId.substring(1)+ '.collapse').collapse('show');
  	 (document.getElementById('plus'+sectionId.substring(1)) !== null) ?   	document.getElementById('plus'+sectionId.substring(1)).src = 'img/minus.png' : console.log("pas de signe");

}

function openCollapseSamePage(sectionId) {
	// FERMER LES AUTRES SECTIONS
	var savedFromCollapseID = 'collapse'+sectionId.substring(1);
	closeCollapseAllButOne(savedFromCollapseID);
 	
	openCollapseSamePageSub(sectionId);
}


