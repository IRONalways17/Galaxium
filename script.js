// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const planets = [
        { class: 'planet1', size: 100, top: '10%', left: '20%' },
        { class: 'planet2', size: 150, top: '30%', left: '70%' },
        { class: 'planet3', size: 120, top: '60%', left: '40%' }
    ];

    planets.forEach(planet => {
        const planetElement = document.createElement('div');
        planetElement.classList.add('planet', planet.class);
        planetElement.style.width = `${planet.size}px`;
        planetElement.style.height = `${planet.size}px`;
        planetElement.style.top = planet.top;
        planetElement.style.left = planet.left;
        planetElement.style.background = 'rgba(255, 255, 255, 0.5)';
        document.body.appendChild(planetElement);
    });
});