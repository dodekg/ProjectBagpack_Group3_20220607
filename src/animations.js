const animatedItems = document.querySelectorAll(".animated");
const animatedItemsUp = document.querySelectorAll(".animatedUp");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle("animate__animated", entry.isIntersecting);
			entry.target.classList.toggle("animate__fadeIn", entry.isIntersecting);
			if (entry.isIntersecting) observer.unobserve(entry.target);
		});
	},
	{
		threshold: 1,
	}
);

animatedItems.forEach((item) => {
	observer.observe(item);
});

const observerUp = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.target.classList.toggle("animate__animated", entry.isIntersecting);
		entry.target.classList.toggle("animate__fadeInUp", entry.isIntersecting);
		if (entry.isIntersecting) observer.unobserve(entry.target);
	});
});

animatedItemsUp.forEach((item) => {
	observerUp.observe(item);
});
