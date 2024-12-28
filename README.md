# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# registro usuario: /api/user/register  post
{
  "nombre": "Mauricio Baes",
  "email": "mauriciobaes@example.com",
  "password": "password123"
}

# inicio de sesion    /api/user/login   post

{
  "email": "mauriciobaes@example.com",
  "password": "password123"
}

token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzZkNzg5NmU1NmZkZjMzYTgzNDJjZGYiLCJpYXQiOjE3MzUyMjc3NjcsImV4cCI6MTczNTIzMTM2N30.b_vjA_LVSC5GgXLz0eyKmQIl180qBJUj24zmNC6aQQY


# crear un nuevo producto
**Descripcion**: Crear un nuevo producto. 
- **Ruta**: /api/product/   
- **Método**: POST
- **Headers**:
    - Key: x-auth-token
    - Value: insertar token copiado previamente
- **Body** (form-data):
```bash
{
  "name": "Grogu",
  "description": "Un adorable amigurumi inspirado en el personaje mas tierno de la galaxia. Perfecto para los amantes de lo geek y los objetos hechos a mano",
  "price": 15000,
  "photos"
}

# adicion de caprta dist tras npm run build
"email":    mauriciobaes@example.com
"password": password123