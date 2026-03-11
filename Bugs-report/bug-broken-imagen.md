#Bug Report

Bug ID: BUG-001

Pasos:

1. Entrar al sitio web https://the-internet.herokuapp.com/broken_images.
2. Al estar en el sitio web podemos apreciar que las imagenes no funcionan correctamente.

Resultados esperados:
Se esperaba que la pagina mostrara las imagenes correctamente.

Resultado actual:
Las imagenes no cargan correctamente.

Informacion adicional:
Al revisar la pagina con devtools, se puede encontar que el servidor no encuentra las rutas para cargar las imagenes, esto porque tambien al revisar el apartado de red encontramos que las imagenes nos arroja un error 404 not found,

severidad:
baja.