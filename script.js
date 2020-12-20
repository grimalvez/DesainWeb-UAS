const navSlide = () => {
	const strip = document.querySelector('.strip');
	const nav = document.querySelector('.nav-item');
	const navItem = document.querySelectorAll('.nav-item li');
	//Toogle
	strip.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	});
	//Animasi
	navItem.forEach((item, index) => {
		item.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 1.1}s`;

	});
}

navSlide();

function Price(){
		var w=document.getElementById('w').value;
		var price=w*10000;
		document.getElementById("result").innerHTML="Estimated price " + price +" IDR";
		}