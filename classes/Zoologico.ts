import { IZoologico } from '../Interfaces/IZoologico';
import { Animal } from './Animal';

export class Zoologico implements IZoologico {
	private name: string;
	private animais: Animal[] = [];

	constructor() {}

	public getName(): string {
		return this.name;
	}

	public setName(name: string): void {
		this.name = name;
	}

	public adicionar(animal: Animal): void {
		this.animais.push(animal);
	}

	public remover(animal: Animal): void {
		this.animais = this.animais.filter((animalList: Animal) => {
			return animal !== animalList;
		});
	}

	public listar(): void {
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
