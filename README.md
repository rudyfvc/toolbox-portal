# Proyecto Toolbox Frontend

La aplicación muestra en pantalla los archivos csv formateados que contengan líneas válidas

# Para ejecutar el proyecto

- Primero instalar dependencias utilizando `npm install`
- Luego para iniciar la API ejecutar `npm start`

## Dependencias

- [react](https://react.dev/) - Librería JavaScript para interfaces
- [react-bootstrap](https://react-bootstrap.netlify.app/) - Framework de desarrollo de interface web

## Servicios
- La aplicación consume los siguientes servicios
    - http://localhost:3000/files/data
    - http://localhost:3000/files/data?fileName={fileName}
    - http://localhost:3000/files/list

# Para ejecutar el proyecto contenerizado

- Ejecutar el comando `docker build . -t toolbox/toolbox-portal`
- Una vez construida la imagen ejecutar el comando `docker run -p 5173:5173 toolbox/toolbox-portal`