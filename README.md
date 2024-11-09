# Proyecto de Ejemplo: Uso de Caché en Node.js con TypeScript

Este proyecto es un ejemplo de cómo implementar y aprovechar el uso de caché en una aplicación Node.js utilizando TypeScript. El objetivo principal es demostrar cómo el caché puede mejorar el rendimiento de las operaciones de lectura y escritura en una base de datos simulada.

## Funcionalidades

El proyecto incluye las siguientes funcionalidades:

1. **Crear Usuario**: Permite crear un nuevo usuario y almacenar sus datos en un archivo JSON. La caché se invalida para asegurar que los datos estén actualizados.
2. **Obtener Usuarios**: Recupera todos los usuarios almacenados. Si los datos están en la caché, se devuelven desde allí para mejorar el rendimiento.
3. **Obtener Usuario por ID**: Recupera un usuario específico por su ID. Si el usuario está en la caché, se devuelve desde allí.
4. **Actualizar Usuario**: Permite actualizar los datos de un usuario existente. La caché se invalida para asegurar que los datos estén actualizados.
5. **Eliminar Usuario**: Elimina un usuario por su ID. La caché se invalida para asegurar que los datos estén actualizados.

## Uso del Caché

El caché se implementa utilizando la biblioteca `node-cache`. La caché se utiliza para almacenar temporalmente los datos de los usuarios, lo que reduce el tiempo de respuesta de las operaciones de lectura.

### Repositorios

- **UserRepository**: Define las operaciones CRUD para los usuarios.
- **CacheRepository**: Define las operaciones para interactuar con la caché.

### Casos de Uso

- **CreateUserUsecase**: Implementa la lógica para crear un usuario y actualizar la caché.
- **GetUsersUsecase**: Implementa la lógica para obtener todos los usuarios, utilizando la caché si es posible.
- **GetUserByIdUsecase**: Implementa la lógica para obtener un usuario por ID, utilizando la caché si es posible.
- **UpdateUserUsecase**: Implementa la lógica para actualizar un usuario y actualizar la caché.
- **DeleteUserByIdUsecase**: Implementa la lógica para eliminar un usuario y actualizar la caché.


## Estructura del Proyecto

```plaintext
.gitignore
database/
  users.json
eslint.config.mjs
example_cache.postman_collection.json
LICENSE
nodemon.json
package.json
README.md
src/
  aplication/
    Server.ts
  domain/
    models/
      Controller.ts
      ControllerResponse.ts
      ErrorHttp.ts
      HttpRequest.ts
      User.ts
  index.ts
  infrastructure/
    driven/
      cache/
        ...
      user/
    driving/
      express/
  usecase/
    user/
      createUser.ts
      ...
  utils/
    buildExpressCallback.ts
    constants.ts
    handleError.ts
    validateJoi.ts
tsconfig.json
```

## Configuración y Ejecución

### Requisitos

- Node.js
- npm

### Instalación

1. Clona el repositorio:
  ```sh
  git clone https://github.com/Koutawars/example-cache-node.git
  ```

1. Instala las dependencias:
  ```sh
  npm install
  ```

### Ejecución en Desarrollo
  ```sh
  npm run dev
  ```

### Ejecución en Producción
  ```sh
  npm run build
  npm start
  ```

## Ejemplos de Uso

### Crear Usuario
```sh
curl -X POST http://localhost:3000/user -H "Content-Type: application/json" -d '{"name": "Jinx", "email": "powpowweapons@leagueoflegends.com"}'
```

### Obtener Usuarios
```sh
curl -X GET http://localhost:3000/user
```

### Obtener Usuario por ID
```sh
curl -X GET http://localhost:3000/user/{id}
```

### Actualizar Usuario
```sh
curl -X PUT http://localhost:3000/user/{id} -H "Content-Type: application/json" -d '{"name": "Violet", "email": "email@leagueoflegends.com"}'
```

### Eliminar Usuario
```sh
curl -X DELETE http://localhost:3000/user/{id}
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.