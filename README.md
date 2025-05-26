# 📌 Aplicación de Posts Fullstack

**Stack:** Next.js 15 + Express + PostgreSQL

Este proyecto permite crear, listar, eliminar y filtrar posts usando una arquitectura fullstack:
- **Frontend:** Next.js 15, Tailwind CSS 4, Redux Toolkit
- **Backend:** Express con Prisma ORM y PostgreSQL

---

## 🧰 Tecnologías Utilizadas

### Frontend

- Next.js 15.3.2 (App Router)
- React 19
- Redux Toolkit
- Tailwind CSS v4
- Axios

### Backend

- Node.js 18
- Express 5
- Prisma ORM
- PostgreSQL
- dotenv
- cors

---

## 📦 Instalación y ejecución

### 🔹 Frontend

Entra al directorio del frontend:

```bash
cd frontend
```

Instala dependencias:

```bash
npm install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre en tu navegador:

```
http://localhost:3000
```

Asegúrate de que el backend esté corriendo en `http://localhost:3001`.

### 🔹 Backend

Entra al directorio del backend:

```bash
cd backend
```

Crea un archivo `.env` en la raíz con tu conexión PostgreSQL local:

```env
DATABASE_URL="postgresql://postgres:TU_CONTRASEÑA@localhost:5432/postgres"
```

_Reemplaza `TU_CONTRASEÑA` por tu contraseña real._

Instala dependencias:

```bash
npm install
```

Aplica las migraciones y genera el cliente Prisma:

```bash
npx prisma migrate dev --name init
```

Inicia el servidor backend:

```bash
npm run dev
```

El servidor estará corriendo en:

```
http://localhost:3001/api/posts
```

---

## 🧪 Endpoints del Backend

| Método | Ruta            | Descripción             |
|--------|-----------------|-------------------------|
| GET    | `/api/posts`    | Listar todos los posts  |
| POST   | `/api/posts`    | Crear un nuevo post     |
| DELETE | `/api/posts/:id`| Eliminar post por ID    |

---

## ✅ Requisitos Generales

- Node.js 18 o superior
- PostgreSQL corriendo en local
- Puertos libres: `3000` (frontend) y `3001` (backend)
