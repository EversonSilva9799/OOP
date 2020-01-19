import { Animal } from './Animal';

export class Zoologico {
	private name: string;
	private animais: Animal[] = [];

	constructor() {}

	public getName(): string {
		return this.name;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public adicionarAnimal(animal: Animal): void {
		this.animais.push(animal);
	}

	public removerAnimal(indiceAnimal: number): void {
		this.animais.splice(indiceAnimal, 1);
	}

	public listarAnimais(): void {
		console.log('------');
		this.animais.forEach((animal: Animal) => {
			let infoAnimal = {
				name: animal.getName(),
				age: animal.getIdade(),
				specie: animal.getEspecie()
			};

			console.log(infoAnimal);
		});
		console.log('------');
	}
}
