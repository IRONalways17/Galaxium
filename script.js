// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const planets = [
        { class: 'planet1', size: 100, top: '10%', left: '20%', animationDuration: '20s' },
        { class: 'planet2', size: 150, top: '30%', left: '70%', animationDuration: '25s' },
        { class: 'planet3', size: 120, top: '60%', left: '40%', animationDuration: '30s' },
        { class: 'planet4', size: 180, top: '50%', left: '10%', animationDuration: '35s' },
        { class: 'planet5', size: 90, top: '20%', left: '80%', animationDuration: '40s' }
    ];

    planets.forEach(planet => {
        const planetElement = document.createElement('div');
        planetElement.classList.add('planet', planet.class);
        planetElement.style.width = `${planet.size}px`;
        planetElement.style.height = `${planet.size}px`;
        planetElement.style.top = planet.top;
        planetElement.style.left = planet.left;
        planetElement.style.animationDuration = planet.animationDuration;
        planetElement.style.background = 'rgba(255, 255, 255, 0.5)';
        document.body.appendChild(planetElement);

        planetElement.addEventListener('mouseover', () => {
            planetElement.style.transform = 'scale(1.2)';
        });

        planetElement.addEventListener('mouseout', () => {
            planetElement.style.transform = 'scale(1)';
        });
    });
});
