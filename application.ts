import { Cachorro } from './classes/Cachorro';
import { Gato } from './classes/Gato';

let cachorro = new Cachorro('Cachorro', 2);
let gato = new Gato('gato', 1);

console.log(`Eu sou ${cachorro.getName()} e tenho ${cachorro.getIdade()} anos`);
console.log(cachorro.getEspecie());
console.log(cachorro.fazerBarulho());
console.log(cachorro.comer());

console.log();

console.log(`Eu sou ${gato.getName()} e tenho ${gato.getIdade()} anos`);
console.log(gato.getEspecie());
console.log(gato.fazerBarulho());
console.log(gato.comer());
