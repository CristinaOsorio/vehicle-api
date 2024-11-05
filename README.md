# Backend de la Aplicación de Gestión de Vehículos

Este repositorio contiene el backend de la aplicación para la gestión de vehículos, diseñado para proporcionar una API que permite realizar operaciones de creación, actualización y obtener un listado sobre los datos de los vehículos.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js**: Framework para construir aplicaciones web y API en Node.js.
- **MySQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar la información de los vehículos.
- **dotenv**: Para gestionar variables de entorno.
- **express-validator**: Para la validación y sanitización de datos de entrada.
- **nodemon**: Para facilitar el desarrollo, permitiendo reiniciar el servidor automáticamente.

## Estructura del Proyecto

- **src/**: Contiene toda la lógica del backend.
  - **config/**: Configuraciones del entorno, incluyendo la conexión a la base de datos y la configuración de CORS.
  - **controllers/**: Encargados de la lógica de negocio, gestionando las solicitudes y respuestas de la API.
    - **vehicle/**: Controlador específico para manejar las operaciones relacionadas con los vehículos.
      - `getAll()`: Obtiene la lista de todos los vehículos.
      - `create()`: Crea un nuevo vehículo en la base de datos.
      - `update()`: Actualiza la información de un vehículo existente.
  - **routes/**: Define las rutas de la API, conectando las solicitudes con los controladores correspondientes.
  - **services/**: Contiene la lógica de acceso a datos, interactuando con los stored procedures para insertar, editar y consultar vehículos.
  - **validators/**: Incluye las validaciones para asegurar la integridad de los datos.
    - **vehicle/**: Validadores específicos para las operaciones de creación y actualización de vehículos.
      - `create()`: Valida los datos requeridos para la creación de un nuevo vehículo.
      - `update()`: Valida los datos necesarios para actualizar un vehículo existente.
- **database.sql**: Archivo que contiene la estructura y las configuraciones iniciales de la base de datos, incluyendo la creación de tablas y stored procedures.

## Configuración del Entorno

1. **Instalación de NVM** (opcional): Si no tienes NVM instalado, puedes seguir las instrucciones de [nvm-sh/nvm](https://github.com/nvm-sh/nvm#installing-and-updating) para instalarlo en tu sistema.

2. **Instalación de dependencias**: Asegúrate de tener Node.js instalado y ejecuta el siguiente comando para instalar las dependencias necesarias:

    ````bash
    npm install
    ````

3. **Configuración de la Base de Datos**: Crea una base de datos MySQL y ejecuta el contenido del archivo `database.sql` para configurar las tablas y stored procedures.

4. **Archivo de configuración**: Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno:

    ````typescript
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=root
    DB_PORT=3306
    DB_NAME=name_db

    CORS_ORIGIN='http://localhost:4200'
    ````


## Uso

1. **Ejecutar el servidor**: Inicia el servidor ejecutando el siguiente comando:
````bash
npm start
````

2. **Acceso a la API**: La API estará disponible en `http://localhost:3000` (o el puerto que hayas configurado).

## Endpoints de la API

| Método | Endpoint             | Descripción                                   |
|--------|----------------------|-----------------------------------------------|
| GET    | /api/vehicles        | Obtiene la lista de todos los vehículos.     |
| POST   | /api/vehicles        | Crea un nuevo vehículo.                       |
| PUT    | /api/vehicles/:id    | Actualiza un vehículo existente.              |

