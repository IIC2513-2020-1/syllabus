# I1

**Pauta general:** Pueden existir errores menores de sintaxis o métodos con nombres ligeramente distintos al correcto. Revisar supuestos escritos en las respuestas.

## Pregunta 1 (2 pts):

Actualmente se tienen las estadı́sticas de las horas de vuelo de algunos pilotos de vuelo  efectuadas en un mes. Cuando el valor es cero indica que ese dı́a el vuelo no salió.

```json
[
    { "name": "Andrés Gutiérrez", "hours": [11, 0, 14, 0, 11, 11, 0, 0,13] },
    { "name": "Carolina Chacón", "hours": [0, 0, 18, 0, 9, 9, 11, 0, 10] },
    { "name": "Roberto Rosales", "hours": [0, 0, 0, 0, 4, 4, 6, 9, 6] },
    [...]
]
```

Dada esta información, serı́a ideal poder obtener la cantidad promedio de horas, la cantidad máxima de horas en un solo vuelo y la cantidad de mı́nima de vuelos.

**NOTA:** se considera un vuelo diario (no se preocupen por los cambios de hora o si parte un dı́a y llega otro, no es parte de la pregunta. Simple: un dı́a, un vuelo de X horas de duración)

* a) (1 pt) Completa, en el archivo adjunto, las funciones `getAvgHours` que calcula la cantidad promedio de horas de vuelo (considerando incluso los dı́as en que el vuelo no salio), `getTotalHours` que calcula la cantidad total de horas de vuelo y `getMinHoursInOneFlight` que calcula la cantidad mı́nima de horas de vuelo (considerando solo los dı́as en que sı́ salió el vuelo). Todas estas funciones reciben un arreglo con números, que representan las horas de vuelo, y deben retornar lo indicado para cada una de ellas.

* b) (1 pt) Completa, en el archivo adjunto, la función `getPilotsStatistics` que recibe un arreglo con elementos, tal como muestra el ejemplo de arriba, y el método debe retornar un objeto con las estadı́sticas agregadas (de todos los pilotos), tal como muestra el siguiente ejemplo:

```json
{ "name": "Summary", "avgHours": 12.5, "totalHours":19, "minHoursInOneFlight": 9 }
```

Para la parte b), puedes suponer que los métodos de la parte a) están implementados.

### Una solución

#### Parte 1

```js
function getAvgHours(hoursArray) {
    const sum = hoursArray.reduce((acc, hours) => acc + hours, 0);
    return sum / hoursArray.length;
}

function getTotalHours(hoursArray) {
    return hoursArray.reduce((acc, hours) => acc + hours, 0);
}

function getMinHoursInOneFlight(hoursArray) { 
    return Math.min(...hoursArray.filter((hoursPerFlight) => hoursPerFlight));
}
```

**Puntajes:**
* 0.3 pts `getAvgHours`
* 0.3 pts `getTotalHours`
* 0.4 pts `getMinHoursInOneFlight`

Si no reciben lo indicado, no asignar puntaje para esa función.

#### Parte 2

```js
function getPilotsStatistics(data) {
    const allHours = [];
    data.forEach((pilot) => {
        allHours = allHours.concat(pilot.hours);
    });

    return {
        name: 'Summary',
        avgHours: getAvgHours(allHours),
        totalHours: getTotalHours(allHours),
        minHoursInOneFlight: getMinHoursInOneFlight(allHours),
    };
}
```

**Puntajes:**
* 0.3 pts - Agregar estadísticas de horas de vuelo
* 0.7 pts - Generar el objeto de respuesta. Si no retorna un objeto, no asignar puntaje.

## Problema 2 (2 pts):

El apocalipsis zombie ha llegado, y toda tu ciudad ya se ha transformado en uno de ellos. Eres la única esperanza para encontrar el antı́doto para devolver a todas las personas a la normalidad.

Durante tus investigaciones has encontrado distintos compuestos que podrı́an ser los posibles candidatos a antı́dotos, además pudiste aislar el virus que transforma en zombie a la gente. El proceso para desarrollar el antı́doto completamente es:

* Dados ciertos compuestos, debes ver como reaccionan junto con el virus Zombie. Si no hay reacción, esto quiere decir que no sirve como compuesto para curar el virus.

* De reaccionar y eliminar el virus, entonces puedes pasar a la siguiente etapa que corresponde a la experimentación con animales. Tendrás que capturar 10 conejos zombie, inyectarles el compuesto y ver si se curan. Debes capturarlos uno a uno y luego, cuando los tengas a todos inyectarles el compuesto "al mismo tiempo". Si uno de los conejos no se cura, entonces no sirve como antı́doto.

* Ahora, si todos los conejos se curaron, hay que probar con humanos zombies. Debes capturar 3 (uno a la vez), y una vez que los hayas capturado a todos, inyectarles el compuesto (al mismo tiempo). Si uno no se cura, entonces ese compuesto no sirve como antı́doto.

* Finalmente, si se han cumplido todos estos pasos, entonces el último de ellos es poder generar una vacuna de forma masiva. Para esto tienes que generar 10 de ellas y tienen que ser todas exitosas. Puedes hacerlas todas al mismo tiempo o una a una. Solo de esta forma habrás salvado a la humanidad.

Debes completar la función `createVaccine(compounds)` que recibe como parámetro una arreglo de compuestos (`compounds`) a probar. La función debe retornar una promesa que indique si se encuentra (la promesa retornada se resuelve) o no (la promesa retornada se rechaza) una cura para este virus. Siéntete libre de crear cualquier otra función que te ayude a solucionar este problema o marcar como `async` la función `createVaccine`.

Ojo que los compuestos debes probarlos uno por uno.

Además cuentas con las siguientes funciones para realizar acciones necesarias de este ejercicio:

* `research.checkVirusReaction(compound)`: función que recibe un compuesto y retorna una promesa que al ser resuelta no retorna un valor, pero indica que el compuesto pudo eliminar el virus. Si la promesa retornada se rechaza, entonces quiere decir que el compuesto no eliminó el virus.

* `research.injectRabbit(rabbit, compound)`: función que recibe un conejo zombie de parámetro y el compuesto a inyectar. Retorna una promesa que, al ser resuelta, no retorna valor indica que el animal se curó del virus. Si la promesa es rechazada, quiere decir que el animal no se curó del virus.

* `research.injectHuman(human, compound)`: función que recibe un humano de parámetro y el compuesto a inyectar, y retorna una promesa que, al ser resuelta, no retorna valor pero indica que el humano se curó del virus. Si la promesa es rechazada, quiere decir que el humano no se curó del virus.

* `research.testVaccine(compound)`: función que crea una vacuna de prueba con el compuesto, retorna una promesa que al ser resuelta, no retorna valor pero indica que la vacuna se realizó con éxito. Si la promesa se rechaza entonces quiere decir que la vacuna falló.

* `me.catchHumanZombie()`: función que simula atrapar un humano zombie, retorna una promesa que al ser resuelta retorna el humano capturado. Si la promesa se rechaza, entonces no se capturó el zombie.

* `me.catchRabbitZombie()`: función que simula atrapar un conejo zombie, retorna una promesa que al ser resuelta retorna el conejo capturado. Si la promesa se rechaza, entonces no se capturó el conejo zombie.

Para aplicar cosas al "mismo tiempo", puedes utilizar lo siguiente:

* `utils.applyAtSameTime([p1, p2, p3, ...])`: función que recibe como parámetro un arreglo de promesas y retorna una promesa que, al ser resuelta no retorna valor pero indica que todas las promesas se llevaron a cabo correctamente. En caso de fallar una, la promesa que se retorna es rechazada.

### Una solución

```js
const RABBIT_ZOMBIES = 10;
const HUMMAN_ZOMBIES = 3;

async function testCompound(compound) {
    const rabbits = [];
    const humans = [];

    await research.checkVirusReaction(compound);

    while (rabbits.length < RABBIT_ZOMBIES) {
        try {
            const newRabbit = await me.catchRabbitZombie();
            rabbits.push(newRabbit);
        } catch(e) { }
    }
    utils.applyAtSameTime(rabbits.map((rabbit) => research.injectRabbit(rabbit, compound)));

    while (human.length < HUMMAN_ZOMBIES) {
        try {
            const newHuman = await me.catchHumanZombie();
            humans.push(newHuman);
        } catch(e) { }
    }
    utils.applyAtSameTime(humans.map((human) => research.injectHuman(human, compound)));

    for(let i = 0; i < 10 ; i += 1) {
        await research.testVaccine(compound);
    }
}

async function createVaccine(compounds) {
    const success = false;

    for (let i = 0; i < compounds.length; i += 1) {
        try {
            await testCompound(compounds[i]);
            success = true;
        } catch(e) { }
    }

    // Sirve también lanzar una error
    if (!success) return Promise.reject();
}
```

**Puntajes:**
* 0.2 pts - Testear compuesto con virus Zombie
* 0.5 pts - Testear en conejos
* 0.5 pts - Testear en humanos
* 0.4 pts - Crear vacunas para compuesto
* 0.4 pts - Método retorna una promesa que solo se resuelve si al menos uno de los compuestos (revisados uno por uno) funciona.

Si se presenta un problema de asincronía, solo se puede obtener un máximo de la mitad del puntaje por item indicado más arriba.

## Pregunta 3 (2 pts):

Las palabras en un idioma tienen una forma de generarse con ciertas reglas que llamaremos patrones. En este caso, los patrones se forman por la letra C de consonante y V de vocal.

Un patrón puede ser escrito de la forma: VCVC y significa que es permitida una palabra hecha de una vocal-consonante-vocal-consonante, como por ejemplo: amor, unid, etc.

Recibirás un arreglo con "patrones" del estilo

```js
[ "VCV", "CVC", "VCVC", "CVCCV",...]
```

Construye una función que recibe un arreglo de patrones y un arreglo de palabras (suponga que las palabras siempre son en minúsculas), y retorne un arreglo de objetos que, a cada palabra, le asocie su patrón o bien diga que no es una palabra permitida (quiere decir que la palabra no sigue ningún patrón).

Por ejemplo:

```json
[ { "palabra": "ala", "patron": "VCV" }, { "palabra": "ato", "patron": "VCV"}, { "palabra": "los", "patron": "CVC"}, { "palabra": "mmm", "patron": "No es palabra permitida"}, { "palabra": "banre", "patron": "CVCCV"}, ...]
```

### Una solución

```js
function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].includes(letter);
}

function getWordPattern(word) {
    const pattern = '';
    for (let i = 0; i < word.length; i += 1) {
        if (isVowel(word[i])) {
            pattern += 'V';
        } else {
            pattern += 'C';
        }
    }
}

function checkWordPattern(words, patterns) {
    return words.map((word) => {
        const wordPattern = getWordPattern(word);
        const isValidWord = patterns.includes(wordPattern);

        return {
            palabra: word,
            patron: isValidWord ? wordPattern : 'No es palabra permitida',
        }
    });
}
```

**Puntajes:**
* 1 pt - Determinar el patrón de la palabra
* 1 pt - Respuesta
  * 0.4 pts - Determinar si el patrón es permitido
  * 0.3 pts - Responder en caso de que sea un patrón permitido
  * 0.3 pts - Responder en caso de que no sea un patrrón permitido
  * Si no retorna un arreglo con un elemento por cada palabra, entonces el máximo de puntaje es 0.2 pts en este item.
