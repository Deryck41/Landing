const burgerCheckbox = document.querySelector('.burger-menu');
burgerCheckbox.addEventListener('click', () => {
	document.querySelector('.mobile-menu').classList.toggle('mobile-menu_visible');
	burgerCheckbox.classList.toggle('burger-menu_checked');
	
});