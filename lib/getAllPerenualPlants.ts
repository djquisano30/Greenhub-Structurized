export default async function getAllPerenualPlants() {
  const res = await fetch(
    `https://perenual.com/api/species-list?key=${process.env.API_KEY_PERENUAL}&q=coconut`
  );
  const data = await res.json();
  return data.data;
}
