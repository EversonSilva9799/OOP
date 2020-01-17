import { Animal } from './Animal';

export class Gato extends Animal {
	constructor(name: string, idade: number) {
		super(name, idade);
		this.especie = 'gato';
	}

	fazerBarulho(): string {
		return 'Miando...';
	}

	brincar(): void {
		console.log('gato correndo');
	}
}
