//Navbar open
const navLinks = document.querySelector(".nav-links");
const openBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");

window.onload = (event) => {
	if (window.innerWidth < 768) {
		navLinks.style.transform = "scaleY(0)";
	}
};

openToggle = () => {
	if (!navLinks.classList.contains("open")) {
		navLinks.style.transform = "scaleY(1)";
		openBtn.style.display = "none";
		closeBtn.style.display = "block";
	} else {
		navLinks.style.transform = "scaleY(0)";
		closeBtn.style.display = "none";
		openBtn.style.display = "block";
	}
	navLinks.classList.toggle("open");
};

openBtn.addEventListener("click", openToggle);
closeBtn.addEventListener("click", openToggle);

//Sticky header
const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		navbar.style.position = "sticky";
	} else {
		navbar.style.position = "relative";
	}
});
