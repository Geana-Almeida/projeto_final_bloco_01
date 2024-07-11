import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";
import { Jogo } from "./src/model/Jogo";
import { Eletronico } from "./src/model/Eletronico";
import { Produto } from "./src/model/Produto";
import { ProdutoController } from "./src/controller/ProdutoController";


export function main() {

    let opcao, tipo, preco, id: number;
    let nome, plataforma, classificacao :string;
    const tipoProduto = ['Jogo', 'Eletronico'];

    const produtos: ProdutoController = new ProdutoController();

    produtos.cadastrar(new Jogo (produtos.gerarNumero() , "God of Wars", 1, 500.00, "Playstation 4"));
    produtos.cadastrar(new Eletronico(produtos.gerarNumero(), "Geladeira", 2, 1500.00, "Eletrodomestico"));

    while (true) {

        console.log(colors.bg.black, colors.fg.bluestrong);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            Produtos de Jogos e Eletronicos          ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos as Produtos             ");
        console.log("            3 - Listar Produto pelo ID               ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Pesquisar Produto                    ");
        console.log("            7 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     "
            ,colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 7) {
            console.log("\nAgradecemos pela preferência, volte sempre!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n");
                
                console.log('Digite o Nome do produto: ');
                nome = readlinesync.question("");

                console.log('Digite o preço do produto: ');
                preco = readlinesync.questionFloat("");

                console.log('Digite o Tipo do produto: ');
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel : false}) + 1;


                switch(tipo){
                    case 1:
                        console.log('Digite a plataforma compativel com o jogo: ');
                        plataforma = readlinesync.question("");
                        produtos.cadastrar(
                            new Jogo (produtos.gerarNumero() , nome, tipo, preco, plataforma)
                        )
                        break;

                    case 2:
                        console.log('Digite a classificação do eletronico: ');
                        classificacao = readlinesync.question("");
                        produtos.cadastrar(
                            new Eletronico (produtos.gerarNumero() , nome, tipo, preco, classificacao)
                        )
                        break;
                }
                
                keyPress();
                break;

            case 2:
                console.log('\n\nListar todos as Produtos\n\n')
                produtos.listarTodas();
                keyPress();
                break;

            case 3:
                console.log('\n\nListar Produto pelo ID\n\n')
                console.log("Digite o id do Produto: ");
                id = readlinesync.questionInt('');

                produtos.listarPorId(id);
                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar Produto\n\n");

                console.log('Digite o id do produto: ');
                id = readlinesync.questionInt("");

                let produto = produtos.buscarNoArray(id);

                if(produto){
                    console.log('Digite o Nome do produto: ');
                    nome = readlinesync.question("");
    
                    console.log('Digite o preço do produto: ');
                    preco = readlinesync.questionFloat("");

                    tipo = produto.tipo;

                    switch(tipo){
                        case 1:
                            console.log('Digite a plataforma compativel com o jogo: ');
                            plataforma = readlinesync.question("");
                            produtos.atualizar(
                                new Jogo (id , nome, tipo, preco, plataforma)
                            )
                            break;
    
                        case 2:
                            console.log('Digite a classificação do eletronico: ');
                            classificacao = readlinesync.question("");
                            produtos.atualizar(
                                new Eletronico (id , nome, tipo, preco, classificacao)
                            )
                            break;
                    }
                }

                keyPress()
                break;
            case 5:
                console.log("\n\nDeletar Produto\n\n");

                console.log("Digite o id do Produto: ")
                id = readlinesync.questionInt("");

                produtos.deletar(id);

                keyPress()
                break;
            case 6:
                console.log("\n\nPesquisar Produto\n\n");
                console.log("Informe o nome do produto que deseja buscar:");
                nome = readlinesync.question("");
                produtos.pesquisar(nome);

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}


export function sobre(): void {
    console.log(colors.fg.cyan)
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Geana Almeida");
    console.log("Generation Brasil - geana.almeida2000@gmail.com");
    console.log("https://github.com/Geana-Almeida");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();