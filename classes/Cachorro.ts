import { Animal } from './Animal';

export class Cachorro extends Animal {
	constructor(name: string, idade: number) {
		super(name, idade);
		this.especie = 'cachorro';
	}

	fazerBarulho(): string {
		return 'latindo...';
	}
}
