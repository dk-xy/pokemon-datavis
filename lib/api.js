// URL de base du serveur
const BASE_URL = 'https://pokeapi.co/api/v2';
const berries_url = '/berry/'; // Fonction loadJson utilisée à l'interne. Elle s'occupe de charger l'url passée en paramètre et convertir
// son résultat en json

export async function loadJson(url) {
  const response = await fetch(url);
  const parsedJson = await response.json();
  return parsedJson;
}
export async function loadJsonUrls(urls) {
  const res = await Promise.all(urls.map(url => fetch(url)));
  return await Promise.all(res.map(r => r.json()));
} // Retourne une liste de pokemon avec le lien

export async function getPokemonRange(limit, offset) {
  return await loadJson(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
}
export async function loadPkmn(url) {
  return await loadJson(url);
}
export async function loadPkmnByName(name) {
  return await loadJson(`${BASE_URL}/pokemon/${name}`);
}
export async function loadBerries() {
  return await loadJson(`${BASE_URL}${berries_url}`);
}
export async function getBerry(id) {
  return await loadJson(`${BASE_URL}/berry/${id}`);
}