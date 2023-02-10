import Swal from 'sweetalert2';

const img = document.getElementById('img');
const name = document.getElementById('name');
const btn = document.getElementById('btn');

const ACCESS_TOKEN = 'seu-token-de-acesso';

const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

const MAX_HEROES = 1000;

const randomId = () => Math.floor(Math.random() * MAX_HEROES);

btn.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomId();

  fetch(`${BASE_URL}/${id}`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.image.url;
      name.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
