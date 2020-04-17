# I1

**Pauta general:** Pueden existir errores menores de sintaxis o métodos con nombres ligeramente distintos al correcto. Revisar supuestos escritos en las respuestas.

## Pregunta 1 (2 pts):

Actualmente se tienen las estadı́sticas de las ventas, de algunas tiendas, de la siguiente forma (ejemplo):

```json
[
    { "name": "Tienda 1", "sales": [500, 100, 20, 20, 10, 10, 10, 50, 60] },
    { "name": "Tienda 2", "sales": [10, 12, 23, 40, 25, 18, 16, 30, 200] },
    { "name": "Tienda 3", "sales": [10, 10, 10, 10, 20, 15, 15, 50, 50] },
    [...]
]
```

Y dada esta información, serı́a ideal poder obtener con la información de las ventas, la cantidad promedio de ventas, la cantidad máxima de ventas en un dı́a y la cantidad total de ventas.

* a) (1 pt) Completa, en el archivo adjunto, las funciones `getAvgSales` que calcula la cantidad promedio de ventas, `getMaxSalesInOneDay` que calcula la cantidad máxima de ventas en un dı́a y `getTotalSales` que calcula la cantidad total de ventas. Todas estas funciones reciben un arreglo con números, que representan las ventas, y deben retornar lo indicado para cada una de ellas.

* b) (1 pt) Completa, en el archivo adjunto, la función `getSalesStatistics` que recibe un arreglo con elementos, tal como muestra el ejemplo de arriba, y el método debe retornar un objeto con las estadı́sticas agregadas (de todas las tiendas), tal como muestra el siguiente ejemplo:

```json
{ "name": "Summary", "avgSales": 48, "maxSalesPerDay": 530, "getTotalSales": 3650 }
```

Para la parte b), puedes suponer que los métodos de la parte a) están implementados.

### Una solución

#### Parte 1

```js
function getAvgSales(salesArray) {
    const sum = salesArray.reduce((acc, sales) => acc + sales, 0);
    return sum / salesArray.length;
}

function getMaxSalesInOneDay(salesArray) {
    return Math.max(...salesArray);
}

function getTotalSales(salesArray) { 
    return salesArray.reduce((acc, sales) => acc + sales, 0);
}
```

**Puntajes:**
* 0.3 pts `getAvgSales`
* 0.4 pts `getMaxSalesInOneDay`
* 0.3 pts `getTotalSales`

Si no reciben lo indicado, no asignar puntaje para esa función.

#### Parte 2

```js
function getSalesStatistics(data) {
    const allSales = [];
    data.forEach((store) => {
        allSales = allSales.concat(store.sales);
    });

    return {
        name: 'Summary',
        avgSales: getAvgSales(allSales),
        maxSalesPerDay: getMaxSalesInOneDay(allSales),
        getTotalSales: getTotalSales(allSales),
    };
}
```

**Puntajes:**
* 0.3 pts - Agregar estadísticas de horas de vuelo
* 0.7 pts - Generar el objeto de respuesta. Si no retorna un objeto, no asignar puntaje.

## Pregunta 2 (2 pts):

Perteneces a una *HeroSec Task Force*, unidad encargada de la seguridad informática mundial, y han encontrado ciertos indicios que en una red está corriendo un virus que, de ser liberado a internet, harı́a colapsar las bolsas mundiales.

Luego de analizar el tráfico de internet, han podido detectar algunos equipos que podrı́an estar relacionados con este virus. Tu misión es descubrir dónde está, obtener una copia, y destruirlo.

* Dado los equipos que han vigilado, debes hackearlos y obtener acceso a la red interna a la que pertenece.

* Si obtuviste acceso a la red interna deberás correr, en todos los computadores al mismo tiempo, un programa que detecte si se encuentra el virus en esa red.

* Si el virus se encuentra en esa red, deberás copiarlo, para tener respaldo de la amenaza y posteriormente estudiarlo. Sin embargo, para crear una copia debes ir equipo por equipo hasta copiarlo. Lo único que se sabe del virus es que salta de un nodo a otro, por lo que este paso podrı́a demorar. Podrı́a ocurrir que tuvieses que revisar varias veces el mismo equipo para copiar. Debes solo intentar copiarlo en este paso, no realizar ninguna otra operación.

* Si el virus sigue presente, debes programar una solución. Si eso sale bien, tienes que instalarla en todos los computadores al mismo tiempo. Solo ası́ habrás eliminado esta amenaza mundial.

Debes completar la función `destroyComputerVirus(nodes)` que recibe como parámetro una arreglo de equipos (`nodes`) que podrı́an estar relacionados con el virus. La función debe retornar una promesa que indique si se encuentra (la promesa retornada se resuelve) o no (la promesa retornada se rechaza) una solución para esta amenaza. Siéntete libre de crear cualquier otra función que te ayude a solucionar este problema o marcar como `async` la función `destroyComputerVirus`.

Ojo que debes revisar un equipo a la vez (de los recibidos por `destroyComputerVirus`).

Además cuentas con las siguientes funciones para realizar acciones necesarias de este ejercicio:

* `tools.getAccessToInternalNetwork(node)`: función que recibe un equipo y retorna una promesa que al ser resuelta retorna un arreglo con los equipos que conforman la red interna. Si la promesa retornada se rechaza, entonces no tuviste acceso a la red interna.

* `tools.detectVirusInNetwork(nodes)`: función que recibe la lista de equipos de una red y retorna una promesa que, al ser resuelta, no retorna valor pero indica que el virus está en esa red. Si la promesa es rechazada, quiere decir que el virus no está presente en la red.

* `tools.copyVirus(node)`: función que recibe un equipo de parámetro y retorna una promesa que, al ser resuelta, no retorna valor pero indica que tienes una copia del virus. Si la promesa es rechazada, quiere decir que no tienes la copia.

* `tools.installSoftware(node, software)`: función que instala un programa en un equipo, retorna una promesa que al ser resuelta no retorna valor pero indica que el programa fue instalado. Puedes suponer que esta función nunca falla.

* `me.programAntidote()`: función que crea una programa contra el virus, retorna una promesa que al ser resuelta retorna el programa. Si la promesa se rechaza entonces quiere decir que no pudiste programar una "cura".

Para aplicar cosas al "mismo tiempo", puedes utilizar lo siguiente:

* `utils.applyAtSameTime([p1, p2, p3, ...])`: función que recibe como parámetro un arreglo de promesas y retorna una promesa que, al ser resuelta no retorna valor pero indica que todas las promesas se llevaron a cabo correctamente. En caso de fallar una, la promesa que se retorna es rechazada.

### Una solución

```js
async function checkNode(node) {
    const networkNodes = await tools.getAccessToInternalNetwork(node);
    await tools.detectVirusInNetwork(networkNodes);

    const copiedVirus = false;
    for (let i = 0; !copiedVirus; i += 1) {
        try {
            await tools.copyVirus(networkNodes[i]);
            copiedVirus = true;
        } catch (e) { }

        if (i === networkNodes.length - 1) {
            i = -1;
        }
    }

    const program = await me.programAntidote();
    await utils.applyAtSameTime(networkNodes
        .map((node) => tools.installSoftware(node, program)));
}

async function destroyComputerVirus(nodes) {
    const success = false;

    for (let i = 0; i < nodes.length; i += 1) {
        try {
            await checkNode(nodes[i]);
            success = true;
        } catch (e) { }
    }

    // Sirve también lanzar una error
    if (!success) return Promise.reject();
}
```

**Puntajes:**
* 0.2 pts - Entrar en la red interna
* 0.3 pts - Detectar virus en la red
* 0.6 pts - Copiar virus
* 0.5 pts - Programar solución e instalarla
* 0.4 pts - Método retorna una promesa que solo se resuelve si se pudo destruir al virus.

Si se presenta un problema de asincronía, solo se puede obtener un máximo de la mitad del puntaje por item indicado más arriba.

## Pregunta 3 (2 pts):

Diremos que un número es binary like cuando respete una cierta estructura que describiremos a continuación:

Si tenemos por ejemplo el número binario 101, un número binary like (que cumple con el patrón 101) serı́a 509, ya que donde hay un uno en el patrón hay un valor mayor a cero en el número y en las posiciones donde hay un cero en el patrón, hay un cero en el número.

Escribe una función que recibe un arreglo de patrones (como texto) y un arreglo de números, y retorna un arreglo de objetos que, a cada número, le asocie su patrón o bien diga que no sigue ningún patrón entregado.

Por ejemplo:

Si recibe como una lista de patrones `["101", "111" ]` y una lista de números `[505, 1, 550]`,  entonces la respuesta debe ser

```js
[ { "number": 505, "pattern": "101" }, { "number": 1, "pattern": undefined }, { "number": 550, "pattern": undefined } ]
```

Siéntete libre de crear todas las funciones auxiliares que necesites.

Si necesitas transformar un número a texto, puedes usar el método `toString()` (ej. `(123).toString()`). Si necesitas pasar de texto a número puedes usar `Number()` (ej. `Number('123')`).

### Una solución

```js
function isOn(textDigit) {
    return textDigit !== '0';
}

function getNumberPattern(number) {
    const pattern = '';
    const textNumber = number.toString();

    for (let i = 0; i < textNumber.length; i += 1) {
        if (isOn(textNumber[i])) {
            pattern += '1';
        } else {
            pattern += '0';
        }
    }
}

function checkNumberPattern(numbers, patterns) {
    return numbers.map((number) => {
        const numberPattern = getNumberPattern(number);
        const isValidPattern = patterns.includes(numberPattern);

        return {
            number,
            patron: isValidPattern ? numberPattern : undefined,
        }
    })
}
```

**Puntajes:**
* 1 pt - Determinar el patrón del número
* 1 pt - Respuesta
  * 0.4 pts - Determinar si el patrón es permitido
  * 0.3 pts - Responder en caso de que sea un patrón permitido
  * 0.3 pts - Responder en caso de que no sea un patrrón permitido
  * Si no retorna un arreglo con un elemento por cada palabra, entonces el máximo de puntaje es 0.2 pts en este item.