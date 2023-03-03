# Documentacion

A continuación se viene una explicación sobre el planteamiento para el diseño de las páginas mencionadas abajo.

## Subir/Editar pieza 📖

Esta página consiste en un sencillo formulario con 3 campos, "Titulo", "Descripcion, "Instrumentos", tanto el campo "Titulo" como el campo "Instrumentos" son campos requeridos para validar el formulario, el campo "Descripcion" es opcional para la subida de la pieza, ya que posteriormente el usuario podra editar cualquier información de sus piezas, en la sección de Mis piezas dando click en un botón de Editar pieza.

## Búsqueda de piezas 📖

Esta página se divide en dos bloques:

1: Filtrar búsqueda: En este bloque el usuario tiene la opcion de aplicar 3 filtros a su busqueda, por titulo, nombre del compositor y por una seleccion de instrumentos contenidos en la pieza.

2: Resultados de búsqueda: En este bloque es donde se pintaran los resultados para la busqueda del usuario, la idea es que este bloque actualize la lista de resultados haciendo peticiones asincronas a la api cada vez que el usuario hace click en el botón de "Aplicar" del bloque de busqueda.


## Mis piezas 📖

Esta página muestra al usuario en una tabla una lista de todas sus piezas subidas, con información de todos los atributos de cada pieza ha excepcion del id, también, en la tabla de registros, cada fila/registro dispone de dos botones para dos acciones, editar o eliminar la pieza en concreto.

## Detalle pieza 📖

Esta página consiste un simple bloque de texto con toda la información sobre los atributos de una pieza en concreto. Los atributos serían Nombre del compositor, Titulo de la pieza, Descripción de la pieza, Intrumentos de la pieza, y Fecha de subida de la pieza.