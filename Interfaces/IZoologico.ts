import { Animal } from '../classes/Animal';

export interface IZoologico {
	adicionar(animal: Animal): void;
	remover(animal: Animal): void;
	listar(): void;
}
