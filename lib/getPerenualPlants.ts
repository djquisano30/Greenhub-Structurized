export default async function getPerenualPlants(search: string) {
  const res = await fetch(
    `https://perenual.com/api/species-list?key=${process.env.API_KEY_PERENUAL}&q=${search}`
  );
  const data = await res.json();
  return data.data;
}
