import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const refs = {
  select: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

refs.loader.style.display = 'block';
refs.error.style.display = 'none';
refs.select.style.display = 'none';

fetchBreeds()
  .then(cat => {
    const markup = cat
      .map(c => `<option value="${c.id}">${c.name}</option>`)
      .join('');
    refs.select.innerHTML = markup;
    refs.loader.style.display = 'none';
    refs.select.style.display = 'block';
  })
  .catch(error => {
    refs.error.style.display = 'block';
    console.log(error);
  });

refs.select.addEventListener('change', e => {
  refs.error.style.display = 'none';
  refs.catInfo.innerHTML = '';
  refs.loader.style.display = 'block';

  fetchCatByBreed(e.target.value)
    .then(cat => {
      if (cat.length === 0) {
        throw new Error(response.status);
      }
      refs.catInfo.innerHTML = createMarkup(cat);
      refs.loader.style.display = 'none';
    })
    .catch(error => {
      console.log('Error');
      refs.catInfo.innerHTML = '';
      refs.loader.style.display = 'none';
      refs.error.style.display = 'block';
      console.log(error);
    });
});

function createMarkup(cat) {
  const markup = cat
    .map(
      c =>
        `   <img class="cat-img" src="${c.url}" width="340"/>
                <div class="cat-description">
                <h2>${c.breeds[0].name}</h2>
                <p>${c.breeds[0].description}</p>
                <p><h3>Temperament:</h3> ${c.breeds[0].temperament}</p>
            </div>                        
        `
    )
    .join('');
  return markup;
}
