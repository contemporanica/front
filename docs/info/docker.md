# Construcción del contenedor Docker

Se contruye el contenedor con el front de nuestra página, añadiendo la estructura angular para su correcta visualización.

## .dockerbuild

_Primera Etapa:_
Utilizamos una imagen de Node.
Copiamos el código de la aplicación en una carpeta llamada app.
Instalamos las dependencias del archivo package.json.
Creamos los archivos de producción usando la imagen de Node.

_Segunda Etapa:_
Utilizamos una imagen del servidor de Nginx para crear un servidor y poder desplegar la aplicación en este.
Copiamos los archivos de producción de app/dist/front a la ruta /usr/share/nginx/html.

## .dockerignore

Se eliminan los componentes no necesarios del contenedor para que éste se construya más rápido.

## Construccion del contenedor

Para construir el contenedor se ha usado el comando `docker build -t front .` , cuando se realice el gitactions esto servirá de base para la actualización del mismo.

## Iniciar el contenedor con el front de la aplicación web

Para poder ver nuestra página funcionando se descarga el contenedor escribiendo en consola `docker run -d -it -p 80:80 front`. Una vez descargado el contenedor, se podrá acceder a él en la dirección [front](http://localhost:80/).
