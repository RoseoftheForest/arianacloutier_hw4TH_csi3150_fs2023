import usedCars from usedCars.js;
const carListContainer = document.getElementById('carListContainer');

usedCars.forEach(car => {
  const carDiv = document.createElement('div');
  carDiv.classList.add('car');

  carDiv.innerHTML = `
    <h2>${car.year} ${car.make} ${car.model}</h2>
    <p>Price: $${car.price}</p>
  `;

  carListContainer.appendChild(carDiv);
});