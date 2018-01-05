require('../cases/MiscCases');
require('../cases/camelCase');
require('../cases/kebab-case');
require('../cases/snake_case');

let TheDude = 'EVERYOne SayS thAT IM SAVage';

console.log(TheDude.firstCap());
console.log(TheDude.firstSmall());
console.log(TheDude.allFirstCap());
console.log(TheDude.allFirstSmall());
console.log(TheDude.letterWave());
console.log(TheDude.letterWave(false));
console.log(TheDude.wordWave());
console.log(TheDude.wordWave(false));
console.log(TheDude.toCamel());
console.log(TheDude.toKebab());
console.log(TheDude.toSnake());