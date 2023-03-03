# FUNCIONALIDADES DE CONTEMPORÁNICA 

A continuación se va a documentar la funcionalidad de cada sección que compone la página web. En total 9 vistas configuran Contemporánica haciéndola tan completa y funcional como práctica y cómoda al usuario.

## BIENVENIDA 📋

Esta página es un saludo al usuario dándole la bienvenida a nuestra página de manera directa y sencilla, en la línea minimalista del diseño general. La parte visualmente dinámica la aporta el zoom del nombre central al colocar el cursor sobre el mismo.


## REGISTRO 📋

Esta página es un sencillo formulario de registro en caso de que el usuario quiera subir piezas propias. En caso de mera visualización no será necesario el registro no por tanto el login posterior.

## LOGIN 📋

Esta página es un sencillo login para que los usuarios previamente registrados puedan acceder con su cuenta.

## EN CASO DE ERROR 📋

Esta página es una salida de mensaje de error en caso de que algo falara ya fuera en caso de un registro o login incorrecto o algún fallo en la manipulación de piezas.

## EDICIÓN Y SUBIDA 📋

Esta página consiste en un sencillo formulario con 3 campos, "Titulo", "Descripcion, "Instrumentos", tanto el campo "Titulo" como el campo "Instrumentos" son campos requeridos para validar el formulario, el campo "Descripcion" es opcional para la subida de la pieza, ya que posteriormente el usuario podra editar cualquier información de sus piezas, en la sección de Mis piezas dando click en un botón de Editar pieza.

## BÚSQUEDA 📋

Esta página se divide en dos bloques:

1: Filtrar búsqueda: En este bloque el usuario tiene la opcion de aplicar 3 filtros a su busqueda, por titulo, nombre del compositor y por una seleccion de instrumentos contenidos en la pieza.

2: Resultados de búsqueda: En este bloque es donde se pintaran los resultados para la busqueda del usuario, la idea es que este bloque actualize la lista de resultados haciendo peticiones asincronas a la api cada vez que el usuario hace click en el botón de "Aplicar" del bloque de busqueda.

## PERFIL 📋

En esta página el usuario logueado tiene acceso a su propia cuenta para editarla con sus datos y fotografía aparte de, claramente la función principal de la web, poder subir sus piezas deseadas.

## PIEZAS 📋

Esta página muestra al usuario en una tabla una lista de todas sus piezas subidas, con información de todos los atributos de cada pieza ha excepcion del id, también, en la tabla de registros, cada fila/registro dispone de dos botones para dos acciones, editar o eliminar la pieza en concreto.

## PIEZAS DETALLADAS 📋

Esta página consiste un simple bloque de texto con toda la información sobre los atributos de una pieza en concreto. Los atributos serían Nombre del compositor, Titulo de la pieza, Descripción de la pieza, Intrumentos de la pieza, y Fecha de subida de la pieza.

Se utilizaron las siguientes fuentes extraídas de Google Fonts (https://fonts.google.com/):
