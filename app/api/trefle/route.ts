import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get("search");

  const res = await fetch(
    `https://trefle.io/api/v1/plants/search?token=${process.env.API_KEY_TREFLE}&q=${searchTerm}`
  );
  const data = await res.json();
  console.log(data);
  return data;
}
