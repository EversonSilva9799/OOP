import { Animal } from './classes/Animal';
import { Cachorro } from './classes/Cachorro';
import { Gato } from './classes/Gato';
import { Rato } from './classes/Rato';
import { Zoologico } from './classes/Zoologico';

let zoologico: Zoologico = new Zoologico();
zoologico.setName('ZOO-123');

let gato: Animal = new Gato('mané', 1);
let cachorro: Animal = new Cachorro('zé', 2);
let rato: Animal = new Rato('tonho', 2);

zoologico.adicionarAnimal(gato);
zoologico.adicionarAnimal(cachorro);
zoologico.adicionarAnimal(rato);

zoologico.listarAnimais();

zoologico.removerAnimal(0);

zoologico.listarAnimais();
