import { Produto } from "../model/Produto";

export interface ProdutoRepository{

    procurarPorNumero(id: number):void;
    listarTodas():void;
    cadastrar(produto: Produto):void;
    atualizar(produto: Produto):void;
    deletar(id: number): void;

    pesquisarProduto(nome: string): void;

}