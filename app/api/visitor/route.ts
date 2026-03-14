import { NextResponse } from 'next/server';

export async function GET() {
  const firebaseDbUrl = `${process.env.FIREBASE_DB_URL}/views.json`;

  if (!process.env.FIREBASE_DB_URL) {
    return NextResponse.json({ message: 'Firebase URL tidak ditemukan' }, { status: 500 });
  }

  try {
    // 1. Ambil data jumlah pengunjung saat ini dari Firebase
    const responseGet = await fetch(firebaseDbUrl, { cache: 'no-store' });
    const currentCount = await responseGet.json();
    
    // 2. Tambahkan 1 ke jumlah pengunjung
    const newCount = (currentCount || 0) + 1;
    
    // 3. Simpan kembali angka terbaru ke Firebase
    await fetch(firebaseDbUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCount),
    });

    // 4. Balikin hasilnya ke UI
    return NextResponse.json({ count: newCount });

  } catch (error: any) {
    console.error('Visitor Counter Error:', error);
    return NextResponse.json({ 
      message: 'Gagal update visitor counter', 
      detail: error.message 
    }, { status: 500 });
  }
}