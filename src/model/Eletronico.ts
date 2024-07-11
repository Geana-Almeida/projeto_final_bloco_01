import { Produto } from "./Produto";

export class Eletronico extends Produto{

    private _classificacao: string;


	constructor(id: number, nome: string, tipo: number, preco: number ,classificacao: string) {
        super(id, nome, tipo, preco);
		this._classificacao = classificacao;
	}


	public get classificacao(): string {
		return this._classificacao;
	}


	public set classificacao(value: string) {
		this._classificacao = value;
	}


    public visualizar():void{
        super.visualizar();
        console.log(`Classificação do eletronico: ${this._classificacao}`)
    }
}