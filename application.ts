import { Animal } from './classes/Animal';
import { Gato } from './classes/Gato';

let animal: Animal = new Gato('gato mané', 1);

console.log(`${animal.getName()}: ${animal.fazerBarulho()}`);
