
        function openNav() {
            document.getElementById("mySidepanel").style.width = "250px";
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
