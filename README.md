# Fryton (Programming Language) 🌐

### Requerimientos 📋


- Python 3
- Node.js


## Objetivo 🎯


El objetivo es desarrollar una plataforma integral de un compilador en línea y un lenguaje propio, aprovechando las capacidades de Django, React, Python. Esta plataforma permitirá a los usuarios escribir, compilar y ejecutar código en el lenguaje personalizado de manera eficiente y completa, proporcionando una experiencia fluida y efectiva en el desarrollo de software.


## Set up de Python 🐍
Para poder correr el proyecto de manera local, debemos de comprobar la version de Python de nuestro sistema. Regularmente los sistemas operativos MACOS y Linux ya cuentan con una version de Python instalada.

Vamos a comprobar que la version de Python sea la 3.9.0 o mayor a esta:

`python3`

En dado caso de que no este instalado, tendremos que instalar la version adecuada.

## Clonando el repositorio 🧬

La forma mas sencilla de clonar el repositorio es accediendo a la ventana de comandos, colocarnos en cualquier lugar donde queramos almacenar el repositorio.
Clonar el repositorio:

`git clone https://github.com/fabrizzioRios/Fryton.git`

Con esto ya tendrias el repositorio descargado directamente a tu computadora.

## Set up del backend 🧠


Dentro del directorio deberemos de entrar al proyecto de Django. Ahi esta almacenada toda la logica de programacion y la parte del backend.

`cd fryton_backend_v1`

Necesitaremos descargar las librerias necesarias para el funcionamiento del proyecto. Con el archivo requirements.txt podemos instalar de manera rapida las librerias y dependencias utilizadas.

El siguiente comando ayuda a instalar todo directamente en el lugar donde este almacenado el repositorio ya clonado.

`pip install -r requirements.txt`

Despues se debera de correr el servidor de django mediante el siguiente comando.

`python manage.py runserver`

Este comando iniciará el servidor de desarrollo de Django en tu máquina local. Se podra acceder a la aplicación a través de la dirección proporcionada en la consola (Tiene que ser http://127.0.0.1:8000/).


## Set up del frontend 🎨


Dentro del directorio deberemos de entrar al proyecto de ReactJX. Ahi esta almacenada toda la logica de programacion y la parte del frontend.

`cd fryton_frontend`

Ejecutamos este comando para descargar todas las dependencias de Javascript que se utilizaron en el proyecto.

`npm install`

Dentro se debera de correr el servidor de ReactJX mediante el siguiente comando.

`npm start`

Este comando iniciará el servidor de desarrollo de ReactJX en tu máquina local. Se podra acceder a la aplicación a través de la dirección proporcionada en la consola (Tiene que ser http://localhost:3000/).


## Uso del sitio ⚒️


Ambos procesos deberan de estar corriendo de forma adecuada.

Se debera acceder a la siguiente url http://localhost:3000/fryton


Y listo, el proyecto debera de ser funcional y podra ser utilizado de manera adecuada.

# Autores ✒️
- Samuel Gutierrez Madrigal
- Luis Fabrizzio Rios Ruiz
