console.log('Connexion js établie - script Navbar');

const btnRespMenu = document.querySelector('.btn-responsive-menu');
const listeMenu = document.querySelector('.liste-nav');
const rubMenu = document.querySelectorAll('.item');
const bgMenu = document.getElementById('nav');

function menuResp() {
	btnRespMenu.classList.toggle('active');
	console.log('Clic sur le bouton');
	listeMenu.classList.toggle('active-menu');
	bgMenu.classList.toggle('active');

}

btnRespMenu.addEventListener('click',()=>{
	menuResp();
});

rubMenu.forEach(item => {
	(item.addEventListener('click',()=>{
	menuResp();
	})
	);
})