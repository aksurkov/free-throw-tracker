let makes = 0;
let misses = 0;

// Load saved values from localStorage
if (localStorage.getItem('makes')) {
  makes = parseInt(localStorage.getItem('makes'));
}
if (localStorage.getItem('misses')) {
  misses = parseInt(localStorage.getItem('misses'));
}

function updateDisplay() {
  const total = makes + misses;
  const pct = total > 0 ? (makes / total * 100).toFixed(1) : 0;
  document.getElementById("makes").textContent = `Makes: ${makes}`;
  document.getElementById("misses").textContent = `Misses: ${misses}`;
  document.getElementById("percentage").textContent = `Shooting %: ${pct}%`;
}

function recordMake() {
  makes++;
  localStorage.setItem('makes', makes);
  updateDisplay();
}

function recordMiss() {
  misses++;
  localStorage.setItem('misses', misses);
  updateDisplay();
}

function resetStats() {
  makes = 0;
  misses = 0;
  localStorage.removeItem('makes');
  localStorage.removeItem('misses');
  updateDisplay();
}

updateDisplay();
