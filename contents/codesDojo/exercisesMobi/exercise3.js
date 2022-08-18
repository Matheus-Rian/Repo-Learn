async function getRickAndMortyCharacters() {
  const response =  await fetch('https://rickandmortyapi.com/api/character');

  let body = null;
  const contentType = response.headers.get('Content-Type');
  if (contentType && contentType.includes('application/json')) {
    body = await response.json();
  }

  if (response.ok) {
    return body;
  }
}

console.log(getRickAndMortyCharacters());