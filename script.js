const images = [
    'img/proyecto1.jpg',
    'img/proyecto2.jpg',
    'img/proyecto3.jpg',
    'img/proyecto4.jpg',
    'img/proyecto5.jpg',
    'img/proyecto6.jpg',
    'img/proyecto7.jpg',
    'img/proyecto8.jpg',
    'img/proyecto9.jpg',
    'img/proyecto10.jpg',
    'img/proyecto11.jpg',
    'img/proyecto12.jpg',
    'img/proyecto13.jpg',
    'img/proyecto14.jpg',
    'img/proyecto15.jpg',
    'img/proyecto16.jpg',
    'img/proyecto17.jpg',
    'img/proyecto18.jpg',
    'img/proyecto19.jpg',
    'img/proyecto20.jpg'
];

const container = document.getElementById('image-container');

function getRandomPosition() {
    const x = Math.random() * (container.clientWidth - 150);
    const y = Math.random() * (container.clientHeight - 150);
    return { x, y };
}

function displayImages() {
    container.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        const randomIndex = Math.floor(Math.random() * images.length);
        img.src = images[randomIndex];
        img.alt = `Project ${randomIndex + 1}`;
        img.setAttribute('data-caption', `Project ${randomIndex + 1}`);
        const { x, y } = getRandomPosition();
        img.style.transform = `translate(${x}px, ${y}px)`;
        container.appendChild(img);
    }
}

setInterval(displayImages, 10000);

window.onload = displayImages;