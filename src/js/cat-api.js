const API_key =
  'live_Q4yXZqybCK8L5vuDhRAifSIcFSzZMu6WywD8hknJ7zQqQe6FIJwh3JHCb0k1ob63';

function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?li123mit=1&breed_ids=${breedId}&api_key=${API_key}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
