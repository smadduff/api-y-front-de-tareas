Aplicación de Posts - Fullstack con Next.js 15 + Express + PostgreSQL
Este proyecto permite crear, listar, eliminar y filtrar posts usando una arquitectura fullstack:
Frontend en Next.js 15 con Tailwind CSS 4 y Redux Toolkit, y backend en Express con Prisma y PostgreSQL.

🧰 Tecnologías utilizadas
Frontend
Next.js 15.3.2 (App Router)

React 19

Redux Toolkit

Tailwind CSS v4

Axios

Backend
Node.js 18

Express 5

Prisma ORM

PostgreSQL

dotenv

cors

📦 Instalación y ejecución
🔹 Frontend
Entra al directorio del frontend:
cd frontend

Instala dependencias:
npm install

Ejecuta el servidor de desarrollo:
npm run dev

Abre en tu navegador:
http://localhost:3000

Asegúrate de que el backend esté corriendo en http://localhost:3001.

🔹 Backend
Entra al directorio del backend:
cd backend

Crea un archivo .env en la raíz con tu conexión PostgreSQL local:
DATABASE_URL="postgresql://postgres:TU_CONTRASEÑA@localhost:5432/postgres"
Reemplaza TU_CONTRASEÑA por la contraseña real de tu instalación de PostgreSQL.

Instala dependencias:
npm install

Aplica las migraciones y genera el cliente Prisma:
npx prisma migrate dev --name init

Inicia el servidor backend:
npm run dev

El servidor quedará corriendo en:
http://localhost:3001/api/posts

🧪 Endpoints del Backend
Método	Ruta	Descripción
GET	/api/posts	Listar todos los posts
POST	/api/posts	Crear un nuevo post
DELETE	/api/posts/:id	Eliminar post por ID

✅ Requisitos generales
Node.js 18 o superior

PostgreSQL corriendo en local

Puertos libres: 3000 (frontend) y 3001 (backend)