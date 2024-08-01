// app/api/encrypt/route.js
import { NextResponse } from 'next/server';
import functions from '@/utils/functions'
const { encryptData } = functions
export async function POST(request:any) {
  const response = await request.json();
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: 'Secret key is not defined' }, { status: 500 });
  }

  // Encrypt the data
  const encryptedData = encryptData(response, secretKey)

  // Return the encrypted data
  return NextResponse.json({data: encryptedData});
}
