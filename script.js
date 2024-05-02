document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("carousel");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    let scrollAmount = 0;
    let scrolled = 0;

    // Função para mostrar/ocultar o carrossel
    function toggleCarousel() {
        var carousel = document.getElementById("carousel");
        carousel.style.display = (carousel.style.display === "none" || carousel.style.display === "") ? "block" : "none";
    }

    // Event listener para o botão "Mostrar Catálogo"
    document.getElementById("toggleCarousel").addEventListener("click", toggleCarousel);

    nextButton.addEventListener("mouseover", function() {
        scrolled = 0;
        scrollAmount = setInterval(function() {
            carousel.scrollLeft += 8;
            scrolled += 8;
            if (scrolled >= 3000) {
                window.clearInterval(scrollAmount);
            }
        }, 10);
    });

    nextButton.addEventListener("mouseout", function() {
        window.clearInterval(scrollAmount);
    });

    prevButton.addEventListener("mouseover", function() {
        scrolled = 0;
        scrollAmount = setInterval(function() {
            carousel.scrollLeft -= 8;
            scrolled += 8;
            if (scrolled >= 3000) {
                window.clearInterval(scrollAmount);
            }
        }, 10);
    });

    prevButton.addEventListener("mouseout", function() {
        window.clearInterval(scrollAmount);
    });
});
