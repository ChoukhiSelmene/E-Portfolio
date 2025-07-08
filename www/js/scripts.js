/*!
 * Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('load', loading);

const loader = document.body.querySelector('.loader');

function loading(event) {
	event.preventDefault();
	setTimeout(() => {
		loader.style.display = 'none';
	}, '2500');
}

window.addEventListener('DOMContentLoaded', event => {
	// Navbar shrink function
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#mainNav');
		const navbarBrand = document.body.querySelector('.navbar-brand');

		if (!navbarCollapsible) {
			return;
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink');
			navbarBrand.innerHTML = 'Accueil';
		} else {
			navbarCollapsible.classList.add('navbar-shrink');
			navbarBrand.innerHTML = `<img class="accueil-img" 
                                    src="./www/assets/img/avatars.png"
                                    alt="mon logo"/>`;
		}
	};

	// Shrink the navbar
	navbarShrink();

	// Shrink the navbar when page is scrolled
	document.addEventListener('scroll', navbarShrink);

	// Activate Bootstrap scrollspy on the main nav element
	const mainNav = document.body.querySelector('#mainNav');
	if (mainNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: '#mainNav',
			offset: 72,
		});
	}

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll('#navbarResponsive .nav-link')
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click();
			}
		});
	});
});
