# adminPacientes-React


#  .Crear Proyecto Con Vite:

npm init vite@latest
   
   * npm install

   Ejecutar:   
   * npm run dev

# Install TailwindCss
 * npm install -D tailwindcss@latest postcss@latest autoprefixer@latest 

 * npx tailwindcss init -p

 * Tailwind.config.css: 

===
> optimo opcion funcional
 module.exports = {
  content: ["index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
====
module.exports = {
  content: [ "./src/**/*.{js,jsx}", ],
  theme: {
    extend: {},
  },
  plugins: [],
}

#Clases no funcionan? ver optimo o :

>npm clean-install

>npm install -D tailwindcss postcss autoprefixer

>npx tailwindcss init -p
 
 * index.css
 -ndex.css:

@tailwind base;

@tailwind components;

@tailwind utilities;


----------------------------------------------------------
* instalar sweet alert
1. Instalé sweet alert 2 para react con el siguiente comando por consola. npm install --save sweetalert2 sweetalert2-react-content

2. Realicé las respectivas importaciones en mi componente Paciente.jsx, así:

import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';


3. dentro de la función handleEliminar, de mi componente Paciente.jsx coloqué el siguiente código:

const handleEliminar = () =>{
        Swal.fire({
            title: 'Estás seguro de eliminar?',
            text: "No puedes revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id);  //llamar el prop y enviar el id
                Swal.fire(
                'Eliminado!',
                'Tu cita se ha eliminado.',
                'success'
                )
            }
        })
}
--------------------------------------------------------

rfce -rafc

-- https://gist.github.com/BCasal/026e4c7f5c71418485c1

# Cómo colaborar en un proyecto en GitHub

 *Fork del repositorio
 *Clonar el repositorio
 *Actualizar la rama master
 *Crear una rama
 *Hacer los cambios
 *Hacer un Pull Request
 *Fork del repositorio
 *El primer paso es hacer "Fork" del repositorio.

# Clonar el repositorio
Después de tener el repositorio en nuestra cuenta, seleccionar la dirección del repositorio "SSH o HTTP" y clonar:

$ git clone https://github.com/User/NombreRepo.git

Dentro de la carpeta que genera, comprobar la URL del repositorio:

$ git remote -v

Antes de realizar modificaciones agregar la URL del repositorio original del proyecto:

$ git remote add upstream https://github.com/User/RepoOriginal(Forkeado)

Comprobar

$ git remote -v

# Actualizar la rama Master
Antes de empezar a trabajar, obtener los últimos cambios del Repo Original:

$ git pull -r upstream master

# Crear una Rama
Para crear una rama usar la opción "checkout" de git:

$ git checkout -b feature-nombre-rama

# Hacer cambios
Realizar todos los cambios que se desea hacer al proyecto.

Agregar los archivos y hacer un commit

Después de realizar el commit hacer el push hacia nuestro repositorio indicando la rama que hemos creado.

$ git push origin feature-nombre-rama

# Hacer un Pull Request
Hacer click en "Compare & Pull Request"

Escribir cambios del Pull Request.

Si todo está bien, enviar con el botón "Send Pull Request".

Esperar a que el duelo del repositorio lo revise, acepte y mezcle en la rama correspondiente.  

actualizar vs desde git
$ git pull 
