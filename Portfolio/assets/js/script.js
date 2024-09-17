document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("start").style.color = "#feb47b";
	document.getElementById("start").style.opacity = 1;
	const navbarToggler = document.querySelector('.navbar-toggler');

	// Remove styles when clicked on any other nav bar link
	document.querySelectorAll('a.nav-link').forEach(anchor => {
		anchor.addEventListener('click', function() {
			// Reset styles for all nav bar links
			document.querySelectorAll('a.nav-link').forEach(link => {
				link.style.color = "";
				link.style.opacity = "";
			});

			// Apply styles to the clicked nav bar link
			this.style.color = "#feb47b";
			this.style.opacity = 1;

			navbarToggler.style.transform = 'rotate(0deg)';
		});
	});

	// Add animation to color switching when scrolled
	window.addEventListener("scroll", function () {
		const home = document.getElementById("home");
		home.style.opacity = 1 - window.scrollY / 600;

		// Highlight the nav link based on the current section in view
		const sections = document.querySelectorAll('section');
		const navLinks = document.querySelectorAll('a.nav-link');

		let currentSection = "";
		sections.forEach(section => {
			const sectionTop = section.offsetTop;
			if (window.scrollY >= sectionTop - 400) {
				currentSection = section.getAttribute('id');
			}
		});

		navLinks.forEach(link => {
			link.style.color = "";
			link.style.opacity = "";
			link.style.textDecoration = "";
			if (link.getAttribute('href').substring(1) === currentSection) {
				link.style.transition = "color 0.5s ease-in-out";
				link.style.color = "#feb47b";
				link.style.opacity = 1;
			}
		});
	});
});

window.addEventListener("scroll", function () {
    const home = document.getElementById("home");
    home.style.opacity = 1 - window.scrollY / 600;

    // Highlight the nav link based on the current section in view
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('a.nav-link');

    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 400) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = "";
        link.style.opacity = "";
        link.style.textDecoration = "";
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.style.color = "#feb47b";
            link.style.opacity = 1;
            link.style.textDecoration = "underline";
        }
    });
});

// Collapse the nav toggle when clicked outside
document.addEventListener('click', function(event) {
	const navbarToggler = document.querySelector('.navbar-toggler');
	const navbarCollapse = document.querySelector('.navbar-collapse');
	
	if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
		navbarToggler.classList.remove('collapsed');
		navbarCollapse.classList.remove('show');
		navbarToggler.style.transform = 'rotate(0deg)';
	}
});

document.querySelector('.navbar-toggler').addEventListener('click', function() {
	const rotation = this.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
	this.style.transition = "transform 0.5s ease-in-out";
	this.style.transform = rotation;
});

// Smooth scrolling for navbar links
document.querySelectorAll('a.nav-link').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		if (window.innerWidth < 992) {
			document.querySelector('.navbar-toggler').classList.toggle('collapsed');
			document.querySelector('.navbar-collapse').classList.toggle('show');
		}
	});
});

function scrollToMiddle(id) {
	var elmnt = document.getElementById(id);
	var y = elmnt.offsetTop;
	var scrollToY = y - 50;
	window.scrollTo(0, scrollToY);
}
