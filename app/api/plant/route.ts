import { NextResponse } from "next/server";
export async function GET() {
  const res = await fetch(
    `https://perenual.com/api/species-list?key=${process.env.API_KEY_PERENUAL}`
  );
  const data = await res.json();
  return NextResponse.json({ data });
}
