const baseURL= "https://swapi.dev/api"

export async function getAllStarships() {
  const res = await fetch(`${baseURL}/starships/`)
  return res.json()
}