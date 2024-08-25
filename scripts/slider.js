function initSlider(sliderId, images) {
    let currentIndex = 0;
    const slider = document.getElementById(sliderId);

    function showSlide(index) {
        slider.style.backgroundImage = `url(${images[index]})`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // Change image every 3 seconds
}


const serviceImages = [
    'images/mc.png',
    'images/mcc.jpg',
    'images/mccc.jpg'
];

const productImages = [
    'images/bc.jpg',
    'images/bcc.jpg',
    'images/bccc.jpg'
];

window.onload = () => {
    initSlider('service-slider', serviceImages);
    initSlider('product-slider', productImages);
};

