// Featured vehicles slideshow
const slideshowContainer = document.getElementById('slideshow');
const featuredVehicles = [
    { type: 'car', name: 'Toyota Camry', image: 'car.jpg', description: 'The Toyota Camry is a mid-size car manufactured by Toyota.', price: '$25,000', engine: '2.5L 4-cylinder' },
    { type: 'bike', name: 'Harley-Davidson Street Glide', image: 'bike.jpg', description: 'The Harley-Davidson Street Glide is a motorcycle manufactured by Harley-Davidson.', price: '$21,999', engine: 'Milwaukee-Eight® 107 V-Twin' },
    { type: 'truck', name: 'Ford F-150', image: 'truck.jpg', description: 'The Ford F-150 is a full-size pickup truck manufactured by Ford Motor Company.', price: '$30,000', engine: '3.5L V6' },
    { type: 'boat', name: 'Yamaha SX210', image: 'boat.jpg', description: 'The Yamaha SX210 is a jet boat manufactured by Yamaha.', price: '$44,999', engine: 'Twin 1.8L High Output Yamaha Marine Engines' }
];

function createSlideshow() {
    featuredVehicles.forEach(vehicle => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.innerHTML = `
            <img src="${vehicle.image}" alt="${vehicle.name}">
            <h3>${vehicle.name}</h3>
            <p>${vehicle.description}</p>
            <p>Price: ${vehicle.price}</p>
            <p>Engine: ${vehicle.engine}</p>
        `;
        slideshowContainer.appendChild(slide);
    });

    let slideIndex = 0;

    function showSlides() {
        const slides = slideshowContainer.getElementsByClassName('slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    showSlides();
}

createSlideshow();
