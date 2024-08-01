document.addEventListener('DOMContentLoaded', function() {
  const planets = document.querySelectorAll('.planet');
  const planetDetails = document.getElementById('planet-details');
  const backButton = document.getElementById('backButton');

  planets.forEach(planet => {
    planet.addEventListener('click', function() {
      const planetName = this.getAttribute('data-info');
      showPlanetDetails(planetName);
    });
  });

  backButton.addEventListener('click', function() {
    hidePlanetDetails();
  });

  function showPlanetDetails(planetName) {
    // Simulate fetching planet details (you can replace this with actual data retrieval)
    const planetData = {
      'The Sun': {
        image: 'sun.jpg', // Replace with actual image URL
        description: 'The Sun is the star at the center of the Solar System.'
        // Add more details as needed
      },
      'Mercury': {
        image: 'mercury.jpg', // Replace with actual image URL
        description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun.'
        // Add more details as needed
      },
      'Venus': {
        image: 'venus.jpg', // Replace with actual image URL
        description: 'Venus is the second planet from the Sun and the hottest planet in our Solar System.'
        // Add more details as needed
      },
      'Earth': {
        image: 'earth.jpg', // Replace with actual image URL
        description: 'Bumi adalah planet ter sempurna yang ada di alam semesta'
        // Add more details as needed
      },
      // Add more planets as needed
    };

    // Clear previous details
    planetDetails.innerHTML = '';

    // Create detail slide
    const detailSlide = document.createElement('div');
    detailSlide.classList.add('detail-slide');

    // Add image
    const image = document.createElement('img');
    image.src = planetData[planetName].image;
    detailSlide.appendChild(image);

    // Add title
    const title = document.createElement('h2');
    title.textContent = planetName;
    detailSlide.appendChild(title);

    // Add description
    const description = document.createElement('p');
    description.textContent = planetData[planetName].description;
    detailSlide.appendChild(description);

    // Append detail slide to planet-details container
    planetDetails.appendChild(detailSlide);

    // Show planet details container
    planetDetails.classList.add('active');
  }

  function hidePlanetDetails() {
    // Hide planet details container
    planetDetails.classList.remove('active');
  }
});