import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const daftarKota = ['Jakarta', 'Depok', 'Bandung', 'Surabaya', 'Medan', 'Makassar', 'Denpasar'];

  if (!apiKey) {
    return NextResponse.json({ message: 'API Key tidak ditemukan di environment' }, { status: 500 });
  }

  try {
    const requests = daftarKota.map(kota =>
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${apiKey}&units=metric&lang=id`)
        .then(response => {
          if (!response.ok) throw new Error(`Gagal fetch data untuk ${kota}`);
          return response.json();
        })
    );

    const results = await Promise.all(requests);

    const dataCuaca = results.map(data => ({
      kota: data.name,
      suhu: Math.round(data.main.temp),
      deskripsi: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }));

    return NextResponse.json(dataCuaca, {
      headers: {
        'Cache-Control': 's-maxage=600, stale-while-revalidate',
      },
    });
    
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ 
      message: 'Terjadi kesalahan saat mengambil data cuaca', 
      detail: error.message 
    }, { status: 500 });
  }
}