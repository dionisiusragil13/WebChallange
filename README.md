# Cara Menjalankan Project
Ikuti langkah-langkah berikut untuk menjalankan project ini di local environment.

---

## 1. Clone Repository

    git clone https://github.com/username/nama-repo.git
    cd nama-repo

---

## 2. Setup Backend

Masuk ke folder backend:

    cd backend

Install dependencies:

    npm install

### 2.1 Konfigurasi Environment Variables

Buat file `.env` di dalam folder `backend/`, lalu isi dengan:

    PORT=5000
    MONGO_URI=your_database_url
    JWT_SECRET=your_secret_key
    ARCJET_KEY=your_arcjet_key

### 2.2 Menjalankan Backend

    npm run dev

Jika berhasil, server akan berjalan di:
http://localhost:5000

---

## 3. Setup Frontend

Buka terminal baru, lalu masuk ke folder frontend:

    cd frontend

Install dependencies:

    npm install

### 3.1 Menjalankan Frontend

    npm run dev

Jika berhasil, aplikasi akan berjalan di:
http://localhost:5173

---

## 4. Akses Aplikasi

- Frontend: http://localhost:5173  
- Backend: http://localhost:5000  

---

## 5. Login / Register

1. Buka aplikasi di browser  
2. Register akun baru  
3. Login menggunakan akun tersebut  
4. Sistem akan menyimpan token JWT untuk autentikasi  

---

## 6. Catatan Penting

- Pastikan sudah menginstall:
  - Node.js (disarankan versi 18+)
  - npm / yarn
- Jangan commit file `.env` ke repository
- Pastikan MongoDB sudah berjalan (local / cloud seperti MongoDB Atlas)

---

## 7. Troubleshooting

### Port sudah digunakan
Ganti PORT di file `.env`

### Gagal koneksi database
- Cek `MONGO_URI`
- Pastikan database aktif

### JWT error
- Pastikan `JWT_SECRET` sudah terisi
# Tech Stack
![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=visualstudiocode&logoColor=white)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](#)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](#)
[![Node.js](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#)
[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](#)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-20232A?style=for-the-badge&logo=zustand&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-7CC356?style=for-the-badge&logo=nodemon&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-800000?style=for-the-badge&logo=mongoose&logoColor=white)
# Preview
## dekstop
<img width="1919" height="909" alt="Screenshot 2026-04-09 170345" src="https://github.com/user-attachments/assets/badffb36-0415-4ef2-8ff2-53ad3f3a0b63" />
<img width="1918" height="905" alt="Screenshot 2026-04-09 170334" src="https://github.com/user-attachments/assets/6ecd87ab-50b8-414d-b964-cf98b90c2de3" /> 

## Mobile
<img width="445" height="800" alt="Screenshot 2026-04-09 170417" src="https://github.com/user-attachments/assets/a072e813-f11f-4f17-bf9a-3766191481c9" />
<img width="447" height="802" alt="Screenshot 2026-04-09 170400" src="https://github.com/user-attachments/assets/84d0a2ed-2262-4e1b-85d4-ffcfc29f1ab5" />

# Tentang Project

Project ini merupakan aplikasi berbasis web yang dibangun menggunakan arsitektur client-server, dengan tujuan untuk menyediakan sistem autentikasi yang aman dan terstruktur. Aplikasi ini memungkinkan pengguna untuk melakukan proses registrasi dan login, di mana data pengguna akan dikelola oleh backend dan disimpan di database. Sistem autentikasi menggunakan JSON Web Token (JWT) untuk memastikan setiap request yang dilakukan user dapat diverifikasi dengan aman.

Pada sisi frontend, aplikasi dikembangkan menggunakan React untuk memberikan pengalaman pengguna yang interaktif dan responsif. Frontend berkomunikasi dengan backend melalui API yang dibangun menggunakan Node.js dan Express. Backend bertanggung jawab dalam menangani logika bisnis, validasi data, serta proses autentikasi dan otorisasi pengguna sebelum mengakses fitur tertentu dalam aplikasi.

Secara keseluruhan, project ini dirancang sebagai implementasi dasar dari sistem autentikasi modern yang umum digunakan dalam pengembangan aplikasi web. Selain itu, project ini juga dapat dikembangkan lebih lanjut dengan menambahkan fitur seperti manajemen user, role-based access control, maupun integrasi dengan layanan pihak ketiga untuk meningkatkan fungsionalitas aplikasi.
