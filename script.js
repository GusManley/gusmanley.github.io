function buildSidebar() {
	const currentPage = location.pathname.split("/").pop() || "index.html";

	const links = [
		{ label: "Home", href: "index.html" },
		{ label: "UEFN", href: "uefn.html", spacer: true },
		{ label: "Unreal Engine", comingSoon: true },
		{ label: "Unity", comingSoon: true },
		{ label: "Asset Design", href: "gameassets.html", spacer: true },
		{ label: "Headcount", href: "headcount.html", spacer: true },
		{
			label: "Privacy Policy",
			href: "headcounter-privacy.html",
			subLink: true,
		},
		{ label: "Contact", href: "contact.html", spacer: true },
	];

	const panel = document.getElementById("mySidepanel");
	if (!panel) return;

	let html =
		'<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';

	links.forEach(function (link) {
		const style = link.spacer ? ' style="margin-top: 20px"' : "";
		if (link.comingSoon) {
			html += `<a class="coming-soon">${link.label}</a>`;
		} else if (link.subLink) {
			html +=
				link.href === currentPage
					? `<a class="sub-link">${link.label}</a>`
					: `<a href="${link.href}" class="sub-link">${link.label}</a>`;
		} else if (link.href === currentPage) {
			html += `<a${style}>${link.label}</a>`;
		} else {
			html += `<a href="${link.href}"${style}>${link.label}</a>`;
		}
	});

	panel.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", buildSidebar);

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
		speed = 1200;

		isDeleting = true;
	} else if (isDeleting && letterIndex === 0) {
		isDeleting = false;

		wordIndex = (wordIndex + 1) % words.length;

		speed = 400;
	}

	setTimeout(typeEffect, speed);
}

typeEffect();

document.addEventListener("DOMContentLoaded", function () {
	const cards = document.querySelectorAll(".flip-card");

	cards.forEach(function (card) {
		card.addEventListener("click", function () {
			card.classList.toggle("flipped");
		});
	});
});
