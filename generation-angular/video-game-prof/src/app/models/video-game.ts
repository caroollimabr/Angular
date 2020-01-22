import { TipoProduto } from './tipo-produto';

export class VideoGame{
    constructor(
        public id: number,
        public nome: string,
        public marca: string,
        public tipoProduto: TipoProduto
    ){}
}