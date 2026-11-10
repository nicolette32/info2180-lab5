/* Listens for clicks on the button with id of lookup */
window.addEventListener('DOMContentLoaded', () => {
  const lookupBtn = document.getElementById('lookup');
  const countryInput = document.getElementById('country');
  const result = document.getElementById('result');

  lookupBtn.addEventListener('click', () => {
    const country = countryInput.value.trim();

    fetch('world.php?country=' + encodeURIComponent(country))
      .then(response => response.text())
      .then(html => {
        result.innerHTML = html;
      })
      .catch(error => {
        result.textContent = 'Something went wrong: ' + error;
      });
  });
});