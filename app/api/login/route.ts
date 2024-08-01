// app/api/login/route.js
import { NextResponse } from 'next/server';
// import cookie from 'cookie';
// import axios from 'axios';
// import { authenticate } from '@/services/restService';

// export async function POST(request:any) {
//   console.log('/-----routes-----/')
//   const { email, password } = await request.json();

//   try {
//     // Forward the login request to your backend
//     const response = await authenticate.login({ email, password });
//     console.log(response)
//     const { data, token, message } = response.data;
//     if ([200, 201].includes(response.status)) {
//       // console.log('--------', response, '---------')
//       // Set the JWT in an HttpOnly cookie
//       return NextResponse.json(
//         { message, data },
//         {
//           headers: {
//             'Set-Cookie': cookie.serialize('token', token, {
//               httpOnly: true,
//               // secure: process.env.NODE_ENV === 'production',
//               secure: true,
//               maxAge: 24 * 60 * 60, // 24 hours
//               sameSite: 'strict',
//               path: '/',
//             }),
//           },
//         }
//       );
//     } else {
//       return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
//     }
//   } catch (error) {
//     return NextResponse.json(error, { status: 500 });
//   }
// }
