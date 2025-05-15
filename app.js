const cakes = ["Chocolate", "Vanilla", "Red Velvet", "Black Forest"];

const list = document.getElementById('cake-list');
cakes.forEach(cake => {
  const li = document.createElement('li');
  li.textContent = cake;
  list.appendChild(li);
});
