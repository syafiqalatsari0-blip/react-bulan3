tugas day one
jawaban no 2:

HTML adalah bahasa markup standar untuk membuat struktur halaman web. Tag-tag HTML sudah tetap, seperti <div>, <p>, <a>, dan lain-lain.

JSX (JavaScript XML) adalah sintaks yang dipakai di React. Bentuknya mirip HTML, tapi ditulis di dalam JavaScript. Bedanya, di JSX kita bisa menyisipkan ekspresi JavaScript langsung dengan {}.

contoh kode html
<!DOCTYPE html>
<html>
<head>
  <title>Contoh HTML</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>Nama saya: Syafiq</p>
</body>
</html>

contoh kode jsx
import React from "react";

function App() {
  const name = "Syafiq";
  return (
    <div>
      <h1>Hello World</h1>
      <p>Nama saya: {name}</p>
    </div>
  );
}

export default App;

jawaban no 3
Virtual DOM adalah representasi tiruan (virtual) dari DOM asli yang disimpan di memori oleh React.
Cara kerjanya di React:

Saat data berubah, React tidak langsung mengubah DOM asli.

React membuat Virtual DOM baru lalu membandingkannya dengan Virtual DOM lama (proses ini disebut diffing).

React hanya memperbarui bagian DOM asli yang benar-benar berubah (bukan seluruh halaman).

jawaban no 4
Perbedaan SPA vs MPA

SPA (Single Page Application)
Aplikasi web yang hanya memuat satu halaman utama. Konten di dalamnya diperbarui secara dinamis menggunakan JavaScript (tanpa reload penuh). Contoh: Gmail, Trello.

MPA (Multi Page Application)
Aplikasi web yang terdiri dari banyak halaman terpisah. Setiap kali user berpindah halaman, browser melakukan reload penuh. Contoh: situs berita, e-commerce tradisional.
SPA (Single Page Application)

Kelebihan:

Navigasi cepat (tanpa reload penuh, pengalaman seperti aplikasi).

Bisa lebih interaktif dan responsif.

Kekurangan:

SEO lebih sulit karena konten tidak langsung tersedia di server.

File awal biasanya besar, sehingga waktu load pertama agak lama.
MPA (Multi Page Application)

Kelebihan:

SEO lebih mudah, karena tiap halaman punya URL dan konten lengkap.

Struktur lebih cocok untuk aplikasi besar dengan banyak fitur/halaman.

Kekurangan:

Navigasi lebih lambat karena selalu reload halaman.

Pengembangan frontend bisa lebih kompleks (butuh banyak template & kode berulang).
