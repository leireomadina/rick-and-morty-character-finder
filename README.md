# Ejercicio de evaluación final con React - Módulo 3 Adalab

![Gif of a shining pokeball](./src/images/rick-gif.gif)
 ==*Wubba Lubba Dub Dub!*==

##  Enunciado

Este ejercicio forma parte de la evaluación final del módulo 3 del bootcamp Adalab. Consiste en desarrollar una página web utilizando el framework **React**. 

Se trata de un listado de personajes de ** **Rick and Morty**, que podemos filtrar por el nombre del personaje y además seleccionar para ver una ficha detallada del mismo.

Para desarrollar esta SPA he utilizado, entre otras, las siguientes tecnologías: **React, JavaScript **y** SASS**.


## Resultado final

![Image of the web final result showing ten pokemons](./src/images/result.png)


## Pasos realizados

A continuación se muestra una lista de las nuevas funcionalidades que vamos a ir añadiendo en la página:

- [x] Plantear en papel la estructura de componentes para la web.
- [x] Crear una nueva aplicación React.
- [x] Obtener los datos del API mediante un fetch.
- [x] Pintar en pantalla los personajes.
- [x] Filtrar los personajes por nombre.
- [x] Pintar los detalles de personajes en otra página con React Router.
- [x] Detalles de calidad: 
  - [x] Campo de texto dentro de etiqueta form.
  - [x] Impedir que el navegador cambie de ruta o navegue al pulsar intro en el campo de texto.
  - [x] Mostrar mensaje cuando un personaje no se encuentra tras búsqueda.
  - [x] Filtrado de texto independientemente de mayúsculas o minúsculas.
  - [x] Tras entrar en el detalle de un personaje, al volver atrás el input mantiene el texto escrito antes.
- [x] Bonus: mejoras visuales y diseño responsive:
  - [x] Mostrar especie y si un personaje está muerto con un icono.
  - [x] Usar grid para listado de tarjetas de personajes.
  - [x] Implementar diseño responsive.
- [x] Bonus: URL de detalle de personajes compartible:
  - [x] Visitar detalle de personaje directamente escribiendo la URL.
  - [x] Mostrar mensaje cuando un personaje no existe a través de URL.
- [x] Bonus: ordenación de los personajes alfabéticamente en la búsqueda.

## Jerarquía de componentes

- App
  - Header
  - CharacterDetail

  - Header
  - Filters
  - CharacterList
    - CharacterCard
    - CharacterNotFound

App
 ├─ Header 
 ├─ CharacterDetail
 ├─ Header 
 ├─ Filters 
 ├─ CharacterList 
 |  ├─ CharacterCard
 |  └─ CharacterNotFound


---

Este proyecto ha sido desarrollado por **Leire Ordeñana Madina** como alumna de Adalab.
