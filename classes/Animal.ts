import { IAnimal } from '../Interfaces/IAnimal';

export abstract class Animal implements IAnimal {
	private name: string;
	private idade: number;
	protected especie: string;

	constructor(name: string, idade: number) {
		this.name = name;
		this.idade = idade;
	}

	public getName(): string {
		return this.name;
	}
	public setName(name: string): void {
		this.name = name;
	}

	public getIdade(): number {
		return this.idade;
	}

	public setIdade(idade: number): void {
		this.idade = idade;
	}

	public getEspecie(): string {
		return this.especie;
	}

	public comer(): string {
		return 'comendo...';
	}

	abstract fazerBarulho(): string;
	abstract brincar(): void;
}
