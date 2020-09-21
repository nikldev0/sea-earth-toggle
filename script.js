const checkbox = document.getElementById('checkbox');
const wave = document.querySelector('.wave');
const grass = document.querySelector('.grass');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    wave.classList.add('wave-exit');
    grass.classList.add('grass-entry');
    grass.classList.remove('grass-exit');
  } else {
    grass.classList.remove('grass-entry');
    grass.classList.add('grass-exit');
    wave.classList.remove('wave-exit');
  }
});
