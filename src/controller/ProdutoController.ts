import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";


export class ProdutoController implements ProdutoRepository{

    private listaProduto: Array<Produto> = new Array<Produto>();

    public id: number = 0;

    cadastrar(produto: Produto): void {
        this.listaProduto.push(produto);
        console.log("Produto cadastrado com sucesso!")
    }

    listarTodas(): void {
        for(let conta of this.listaProduto){
            conta.visualizar();
        }
    }

    listarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id)
        if(buscaProduto !== null){
            buscaProduto.visualizar();
        }
        else{
            console.log("\nProduto não foi encontrado.")
        }
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto !==  null){
            this.listaProduto[this.listaProduto.indexOf(buscaProduto)] = produto;
            console.log("\nProduto atualizado com sucesso!")
        }else{
            console.log("\nProduto não encontrado!");
        }

    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto !== null){
            this.listaProduto.splice(this.listaProduto.indexOf(buscaProduto), 1);
            console.log('\nProduto foi excluída!');
        }else{
            console.log("\nProduto não foi encontrado!");
        }
    }

    pesquisar(nome: string): void {
        let buscaPorProduto = this.listaProduto.filter(produto => 
            produto.nome.includes(nome)
        );

        buscaPorProduto.forEach( produto => produto.visualizar() )
    }
   

    //metodos auxiliares
    public gerarNumero(): number{
        return ++ this.id
    }

    public buscarNoArray(id: number): Produto | null{
        for(let produto of this.listaProduto){
            if(produto.id === id){
                return produto;
            }
        }

        return null;
    }
}