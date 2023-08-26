
    document.addEventListener("DOMContentLoaded", function () {
        const carousel = document.querySelector('#carouselExample');
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 10000, // Set the interval time in milliseconds (10000ms = 10 seconds)
        });
    });

