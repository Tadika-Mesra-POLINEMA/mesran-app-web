# Mesran Application Website

Website ini akan digunakan sebagai salah satu akses untuk aplikasi kami.

## Development dengan Docker

### Prasyarat
- [Docker](https://www.docker.com/) dan Docker Compose terinstall.

### Menjalankan Environment Development
Jalankan perintah berikut untuk menyalakan container development dengan Fitur Hot-Reloading:

```bash
docker compose up --build
```

Aplikasi akan berjalan di: `http://localhost:3001`

### Menghentikan Container
```bash
docker compose down
```

### Menjalankan di Background (Detached Mode)
```bash
docker compose up -d
```
