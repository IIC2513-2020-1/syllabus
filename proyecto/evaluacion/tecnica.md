# Evaluación Técnica

Al finalizar la E6 se genera el output para proceder con esta evaluación, la que tiene como fin revisar la aplicación como producto final.

## Aspectos de la evaluación

Para esto se hará una evaluación de aspectos, en donde se medirá el porcentaje de logro (0% a 100%, con saltos de 10) para ese punto.

**Items importantes (II)**

* No usar Inline CSS
* No usar html para estilo ni posicionamiento (sin tablas)
* Unobstrusive JS y/o uso apropiado de React
* Construir las rutas o URL de links usando ctx.router.url o similar (en lugar de hardcoded
* Usar Sequelize API para consultas a la BD por sobre SQL (a menos no se pueda o SQL sea mucho más eficiente)
* Validaciones bien definidas en los modelos
* Convenciones JavaScript (camelCase y otras buenas prácticas del lenguaje, respeto sintáxis linter)

**Otros Items (OT)**

* No usar consultas sequelize o lógica muy compleja en las vistas
* Sacar provecho de middlewares
* Sin funciones gigantes en los route helpers ("fat models / skinny controllers")
* Resource oriented
* Usar métodos donde corresponden (MVC)

**Descuentos (D)**

Podrían ocurrir descuentos debido a otros aspectos relacionados a la calidad del producto final (también medido como porcentaje).

**Impresión Ayudante (IA)**

El ayudante aportará con su visión del producto final así como del trabajo desarrollado a lo largo del semestre. La evaluación será en la escala discreta del proyecto (desde A hasta E).

## Cálculo

Finalmente, la nota se calculará como:

Evaluación Técnica = 0.2 * IA + 0.8 * ( 0.8 * ((%logro II - D) * 6 + 1) + 0.2 * ((%logro total(II y OT) - D) * 6 + 1))
