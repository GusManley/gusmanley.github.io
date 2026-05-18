function openNav() {
	document.getElementById("mySidepanel").style.width = "min(80vw, 300px)";
	document.getElementById("overlay").style.display = "block";
}

function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
	document.getElementById("overlay").style.display = "none";
}

function comingSoon(event) {
	event.preventDefault();

	alert("This page is coming soon!");
}

document.addEventListener("DOMContentLoaded", function () {
	const comingSoonLinks = document.querySelectorAll(".coming-soon");

	comingSoonLinks.forEach(function (link) {
		const originalText = link.textContent;

		link.addEventListener("mouseenter", function () {
			link.textContent = "Coming soon...";
		});

		link.addEventListener("mouseleave", function () {
			link.textContent = originalText;
		});

		link.addEventListener("click", function (event) {
			event.preventDefault();
		});
	});
});

const words = [
	"Unreal Engine games.",
	"Unity games.",
	"UEFN maps.",
	"game assets.",
	"websites.",
];

const typewriter = document.getElementById("typewriter");

let wordIndex = 0;

let letterIndex = 0;

let isDeleting = false;

function typeEffect() {
	const currentWord = words[wordIndex];

	if (isDeleting) {
		letterIndex--;
	} else {
		letterIndex++;
	}

	typewriter.textContent = currentWord.substring(0, letterIndex);

	let speed = isDeleting ? 60 : 100;

	if (!isDeleting && letterIndex === currentWord.length) {
		speed = 1200; // pause after word is typed

		isDeleting = true;
	} else if (isDeleting && letterIndex === 0) {
		isDeleting = false;

		wordIndex = (wordIndex + 1) % words.length;

		speed = 400; // pause before next word
	}

	setTimeout(typeEffect, speed);
}

typeEffect();
