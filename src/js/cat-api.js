const API_key =
  'live_Q4yXZqybCK8L5vuDhRAifSIcFSzZMu6WywD8hknJ7zQqQe6FIJwh3JHCb0k1ob63';

function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds').then(response =>
    response.json()
  );
}

export { fetchBreeds, fetchCatByBreed };
