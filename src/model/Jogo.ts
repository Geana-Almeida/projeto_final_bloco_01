import { Produto } from "./Produto";

export class Jogo extends Produto{

    private _plataforma: string;



	constructor(id: number, nome: string, tipo: number, preco: number ,plataforma: string) {
        super(id, nome, tipo, preco);
		this._plataforma = plataforma;
	}

	public get dispositivo(): string {
		return this._plataforma;
	}

	public set dispositivo(value: string) {
		this._plataforma = value;
	}


    public visualizar():void{
        super.visualizar();
        console.log(`Plataforma do jogo: ${this._plataforma}`)
    }
}