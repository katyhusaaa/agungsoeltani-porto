import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY; // Ini bakal narik dari dashboard Netlify
  const daftarKota = ['Jakarta', 'Depok', 'Bandung', 'Surabaya', 'Medan', 'Makassar', 'Denpasar'];

  try {
    const requests = daftarKota.map(kota =>
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${apiKey}&units=metric&lang=id`)
        .then(res => res.json())
    );
    
    const results = await Promise.all(requests);
    const dataCuaca = results.map(data => ({
      kota: data.name,
      suhu: Math.round(data.main.temp),
      deskripsi: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }));

    return NextResponse.json(dataCuaca);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}