export async function getAllTreflePlants(search: string) {
  const res = await fetch(
    `https://trefle.io/api/v1/plants/search?token=${process.env.API_KEY_TREFLE}&q=${search}`
  );
  const data = await res.json();

  return data.data;
}
