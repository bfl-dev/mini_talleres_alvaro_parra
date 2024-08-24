# Principales Convenciones de Git
Mini taller semana 2, Proyecto de Aplicacion.

## Resumen
Convenciones utilizadas para tener una mejor entendimiento de los cambios realizados en el control de versiones.

## Explicación
Para tener un mejor entendimiento del cambio realizado por un commit, se ha creado una convencion para
el mensaje de los commit. 
Este convencion dicta que el mensaje de un commit: 
- DEBE contener un tipo 
- PUEDE mencionar su "alcance" (scope)
- DEBE contener una descipcion, resumiendo los cambios hechos.
- PUEDE contener un cuerpo de texto.
- PUEDE contener un pie de pagina. 

## Modelo (Estructura)


``` html
<Tipo>[Alcance Opcional]: <Descripcion>
[Cuerpo Opcional]

[Pie de pagina Opcional]
```  

## Listado de convenciones principales
- Un commit DEBE tener un prefijo con el tipo de commit, siendo este un sustantivo, `fix`, `feat`, etc. Seguido por un alcance (scope) OPCIONAL, un `!` OPCIONAL y el ":" y espacio.

- El tipo `feat` DEBE ser utilizado cuando el commit añade una nueva funcionalidad.

- El tipo `fix` DEBE ser utilzado cuando el commit corrige algun error o algun "bug"

- Un alcance (Scope) PUEDE ser añadido despues de un tipo. Este consiste de un sustantivo, describiendo alguna parte del codigo base, dentro de un parentesis.
Ejemplo: `fix(parser)`

- La descripcion DEBE inmediatamente despues del ":" y el espacio despues del prefijo de tipo/alcance. La descripcion es un resumen de los cambios realizados. Ejemplo: `fix: error de division al tratar de dividir por 0`

- PUEDE añadirse un cuerpo de texto del mensaje de un commit mas grande despues de la descripcion. Este DEBE empezar despues de un salto de linea.

- Tipos aparte de `feat`, `fix` PUEDEN ser usados en el mensaje del commit.

- Los BREAKING CHANGE DEBEN ser indicados en el prefijo de tipo/alcance. O pueden añadirse como un pie de pagina en el mensaje.

- Si se indica un BREAKING CHANGE en el prefijo, este DEBE ser indicado antes del ":" como un `!`. Si se utiliza esta opcion, la opcion de pie de pagina PUEDE no utilizarse y se DEBERA describir el cambio en el cuerpo del commit.

- Si se indica un BREAKING CHANGE en el pie de pagina, este DEBE consistir en el texto "BREACKING CHANGES" en mayusculas, seguido por un ":", un espacio, y la descipcion.

### Glosario

- BREACKING CHANGE: Cambio que puede ser conflictivo o podria "romper" el codigo.

- Alcance (scope): Parte del codigo que puede ser descrita con un sustantivo. como `exportador`.


