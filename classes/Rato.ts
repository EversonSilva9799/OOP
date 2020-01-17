import { Animal } from './Animal';

export class Rato extends Animal {
	constructor(name: string, idade: number) {
		super(name, idade);
		this.especie = 'rato';
	}

	brincar() {
		console.log('rato brincando rápido');
	}

	fazerBarulho() {
		return 'piii...';
	}
}
