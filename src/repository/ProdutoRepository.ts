import { Produto } from "../model/Produto";

export interface ProdutoRepository{

    cadastrar(produto: Produto):void;
    listarTodas():void;
    listarPorId(id: number):void;
    atualizar(produto: Produto):void;
    deletar(id: number): void;
    pesquisar(nome: string): void;

}