# I1

**Pauta general:** Pueden existir errores menores de sintaxis o métodos con nombres ligeramente distintos al correcto. Revisar supuestos escritos en las respuestas.

## Pregunta 1 (2 pts):

Actualmente se tienen las estadı́sticas de los goles, de jugadores de fútbol, de la siguiente forma (ejemplo):

```json
[
    { "name": "Alexis Sanchez", "goals": [0, 1, 2, 0, 0, 1, 1, 0, 0] },
    { "name": "Arturo Vidal", "goals": [0, 1, 2, 0, 2, 1, 1, 0, 2] },
    { "name": "Gary Medel", "goals": [0, 0, 0, 0, 0, 1, 1, 0, 0] },
    [...]
]
```
Y dada esta información serı́a ideal poder obtener la cantidad promedio de anotaciones, la cantidad máxima de goles anotados en un partido y la cantidad de partidos sin anotar.

* a) (1 pt) Completa, en el archivo adjunto, las funciones `getAvgGoalsGames` que calcula la cantidad promedio de goles, `getMaxGoalsInOneGame` que calcula la cantidad máxima de goles anotados en un partido y `getMatchesWithoutGoals` que calcula la cantidad de partidos sin anotar. Todas estas funciones reciben un arreglo con números, que representan los goles, y deben retornar lo indicado para cada una de ellas.

* b) (1 pt) Completa, en el archivo adjunto, la función `getPlayersStatistics` que recibe un arreglo con elementos, tal como muestra el ejemplo de arriba, y el método debe retornar **un objeto** con las estadı́sticas agregadas (de todos los jugadores), tal como muestra el siguiente ejemplo:

```json
{ "name": "Summary", "avgGoals": 2.5, "maxGoalsInOneGame": 3, "matchesWithoutGoals": 2 }
```

Para la parte b), puedes suponer que los métodos de la parte a) están implementados.

### Una solución

#### Parte 1

```js
function getAvgGoalsGames(goalsArray) {
    const sum = goalsArray.reduce((acc, goals) => acc + goals, 0);
    return sum / goalsArray.length;
}

function getMaxGoalsInOneGame(goalsArray) {
    return Math.max(...goalsArray);
}

function getMatchesWithoutGoals(goalsArray) { 
    return goalsArray.filter((goalsPerGame) => !(goalsPerGame)).length;
}
```

**Puntajes:**
* 0.3 pts `getAvgGoalsGames`
* 0.3 pts `getMaxGoalsInOneGame`
* 0.4 pts `getMatchesWithoutGoals`

Si no reciben lo indicado, no asignar puntaje para esa función.

#### Parte 2

```js
function getMatchesWithoutGoals(data) {
    const allGoals = [];
    data.forEach((player) => {
        allGoals = allGoals.concat(player.goals);
    });

    return {
        name: 'Summary',
        avgGoals: getAvgGoalsGames(allGoals),
        maxGoalsInOneGame: getMaxGoalsInOneGame(allGoals),
        matchesWithoutGoals: getMatchesWithoutGoals(allGoals),
    };
}
```

**Puntajes:**
* 0.3 pts - Agregar estadísticas de jugadores
* 0.7 pts - Generar el objeto de respuesta. Si no retorna un objeto, no asignar puntaje.

## Pregunta 2 (2 pts):

Te motivaste para luchar contra el COVID-19, ya que quieres volver a tener clases presenciales
con tus queridos profesores. Para esto has definido ciertas etapas que debes seguir.

* Dados ciertos compuestos, debes ver como reaccionan junto con el COVID-19. Si no hay reacción, esto quiere decir que no sirve como compuesto para curar el virus.

* De reaccionar y eliminar el virus, entonces puedes pasar a la siguiente etapa que corresponde a la experimentación con animales. Tendrás que infectar a ratones (al "mismo tiempo") y, una vez que todos estén infectados, aplicarle el compuesto (a todos al "mismo tiempo"). Si un ratón no se cura, entonces ese compuesto no sirve para curar el COVID-19

* Posteriormente pasas a la etapa de experimentación en los humanos, los cuales ya están infectados con COVID-19 y tu le aplicas el compuesto. De no curar a todos los humanos, entonces el compuesto no sirve para curar el virus. Debes aplicar el compuesto a un humano a la vez, y es perar que se cure para pasar al siguiente.

* Si todo sale bien hasta este punto, tienes que crear una vacuna que pueda ser distribuida en
masa. Para esto tienes que producir 10 vacunas y las 10 deben resultar exitosas. Puedes hacerlo uno a uno o todas al mismo tiempo. Solo de esta forma, podrás decir con completa certeza que has encontrado la cura. 

Para esto debes completar la función `createVaccine(compounds, testAnimals, testHumans)` que recibe como parámetro una arreglo de compuestos (`compounds`), `testAnimals` que es un arreglo en donde cada elemento es un arreglo de animales para probar un compuesto en especı́fico, y `testHumans` que es un arreglo en donde en cada elemento contiene un arreglo de personas para probar un compuesto en especı́fico (en ambos casos puedes suponer que el arreglo que recibes como parámetro tiene un largo igual a los compuestos). La función debe retornar una promesa que indique si se encuentra (la promesa retornada se resuelve) o no (la promesa retornada se rechaza) una cura para este virus. Siéntete libre de crear cualquier otra función que te ayude a solucionar este problema o marcar como `async` la función `createVaccine`.

Ojo que los compuestos debes probarlos uno a uno.

Además cuentas con las siguientes funciones para realizar acciones necesarias de este ejercicio:

* `research.checkCOVID19Reaction(compound)`: función que recibe un compuesto y retorna una promesa que al ser resuelta no retorna un valor, pero indica que el compuesto pudo eliminar el virus. Si la promesa retornada se rechaza, entonces quiere decir que el compuesto no eliminó el virus.

* `research.infectAnimalCOVID19(animal)`: función que recibe un animal de parámetro y retorna una promesa que, al ser resuelta, no retorna valor pero indica que el animal ya tiene el virus. Puedes suponer que esta función nunca falla.

* `research.injectAnimal(animal, compound)`: función que recibe un animal de parámetro y el compuesto a inyectar, y retorna una promesa que, al ser resuelta, no retorna valor pero indica que el animal se curó del virus. Si la promesa es rechazada, quiere decir que el animal no se curó del virus.

* `research.injectHuman(human, compound)`: función que recibe un humano de parámetro y el compuesto a inyectar, y retorna una promesa que, al ser resuelta, no retorna valor pero indica que el humano se curó del virus. Si la promesa es rechazada, quiere decir que el humano no se curó del virus.

* `research.testVaccine(compound)`: función que crea una vacuna de prueba con el compuesto, retorna una promesa que al ser resuelta, no retorna valor pero indica que la vacuna se realizó con éxito. Si la promesa se rechaza entonces quiere decir que la vacuna falló.

Para aplicar cosas al "mismo tiempo", puedes utilizar lo siguiente:

* `utils.applyAtSameTime([p1, p2, p3, ...])`: función que recibe como parámetro un arreglo de promesas y retorna una promesa que, al ser resuelta no retorna valor pero indica que todas las promesas se llevaron a cabo correctamente. En caso de fallar una, la promesa que se retorna es rechazada.

### Una solucion

```js
async function testCompound(compound, testAnimalsCompound, testHumanCompound) {
    await research.checkCOVID19Reaction(compound);
    await utils.applyAtSameTime(testAnimalsCompound.map(research.infectAnimalCOVID19));
    await utils.applyAtSameTime(testAnimalsCompound
        .map((animal) => research.injectAnimal(animal, compound)));
    
    for (let i = 0; i < testHumanCompound; i += 1) {
        const human = testHumanCompound[i];
        await research.injectHuman(human, compound);
    }

    for (let i = 0; i < 10; i += 1) {
        await research.testVaccine(compound);
    }
}
async function createVaccine(compounds, testAnimals, testHumans) {
    const success = false;

    for(let i = 0; i < compounds.length; i += 1) {
        try {
            await testCompound(compounds[i], testAnimals[i], testHumans[i]);
            success = true;
        catch(e) { }
    }

    // Sirve también lanzar una error
    if (!success) return Promise.reject();
}
```

**Puntajes:**
* 0.2 pts - Testear compuesto con COVID19
* 0.5 pts - Testear en animales
* 0.5 pts - Testear en humanos
* 0.4 pts - Crear vacunas para compuesto
* 0.4 pts - Método retorna una promesa que solo se resuelve si al menos uno de los compuestos (revisados uno por uno) funciona.

Si se presenta un problema de asincronía, solo se puede obtener un máximo de la mitad del puntaje por item indicado más arriba.

## Pregunta 3 (2 pts):

Definiremos los números Web como aquellos números que tienen el patrón par-impar-impar-impar (considere al cero como par). Por ejemplo, 2513 es un número web.

Escriba una función que reciba una lista de números (arreglo) y determine si cada uno de ellos es o no un número web. Su función debe retornar un arreglo que contenga, para cada número ingresado, un objeto. Si el número es un número web, entonces el objeto tiene la siguiente caracterı́stica:

```json
{ "number": 2513, "isWebNumber": true }
```

En el caso de que no sea número web, se debe incluir el ı́ndice (partiendo de cero) del primer error encontrado en el patrón, por ejemplo:

```json
{ "number": 2522, "isWebNumber": false, "errorIndex": 2 }
```

En el caso anterior, `errorIndex` es 2 ya que está señalando un error en el número después del
5.

Si el número entregado tiene menos o más de 4 dı́gitos, entonces en `errorIndex` coloca -1.

Siéntete libre de crear todas las funciones auxiliares que necesites.

Si necesitas transformar un número a texto, puedes usar el método `toString()` (ej. `(123).toString()`). Si necesitas pasar de texto a número puedes usar `Number()` (ej. `Number('123')`).

### Solución

```js
const WEB_PATTERN_NUMBER = 'PIII';
const MIN_POSSIBLE_WEB_NUMBER = 1000;
const MAX_POSSIBLE_WEB_NUMBER = 9999;

function checkDifference(numberPattern, pattern) {
    for(let i = 0; i < numberPattern; i += 1) {
        if (numberPattern[i] !== pattern) {
            return i;
        }
    }

    return undefined;
}

function getNumberPattern(number) {
    const pattern = '';
    const textNumber = number.toString();

    for (let i = 0; i < textNumber.length; i += 1) {
        const digit = Number(textNumber[i]);
        if (digit % 2 === 0) {
            pattern += 'P';
        } else {
            pattern += 'I';
        }
    }
}

function checkIfNumbersAreWebNumbers(numbers) {
    return numbers.map((number) => {
        if (number < MIN_POSSIBLE_WEB_NUMBER || number > MAX_POSSIBLE_WEB_NUMBER) {
            return { number, isWebNumber: false, errorIndex: -1 };
        }

        const numberPattern = getNumberPattern(number);
        if (numberPattern !== WEB_PATTERN_NUMBER) {
            const errorIndex = checkDifference(numberPattern, WEB_PATTERN_NUMBER);
            return { number, isWebNumber: false, errorIndex };
        }

        return { number, isWebNumber: true };
    });
}
```

**Puntajes:**
* 1 pt - Caso número web correcto
* 1 pt - Caso número web incorrecto
  * 0.4 pts - Error en los dígitos de los números (retorno correcto)
  * 0.6 pts - Indicar índice de error correctamente
* Si no retorna un arreglo con un elemento por cada palabra, descontar 0.3 pts del total obtenido.
