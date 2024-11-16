const form = document.getElementById('bogo-form');
const totalElement = document.getElementById('total');
const prices = {
  unit1: 10,
  unit2: 18,
  unit3: 24
};

form.addEventListener('change', (event) => {
  const selectedUnit = form.unit.value;
  totalElement.textContent = `$${prices[`unit${selectedUnit}`]}.00 USD`;
});

document.getElementById('add-to-cart').addEventListener('click', () => {
  alert('Item added to cart successfully!');
});
