/* Listens for clicks on the button with id of lookup */
window.addEventListener('DOMContentLoaded', () => {
  const lookupBtn = document.getElementById('lookup');
  const citiesBtn = document.getElementById('lookup-cities');
  const countryInput = document.getElementById('country');
  const result = document.getElementById('result');

  /*sends an ajax request to world.php and shows the response in result*/

  function search (extra){
    const country = countryInput.value.trim();
    const url = 'world.php?country=' + encodeURIComponent(country) + extra;
  
    fetch(url)
      .then(response => response.text())
      .then(html => {
        result.innerHTML = html;
      })
      .catch(error => {
        result.textContent = 'Something went wrong: ' + error;
      });
    }

    lookupBtn.addEventListener('click', () => search (''));
    citiesBtn.addEventListener('click', () => search ('&lookup=cities'));
  });