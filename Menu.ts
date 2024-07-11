import readlinesync = require("readline-sync");
import { colors } from "./util/Colors";


export function main() {

    let opcao;

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

                keyPress();
                break;

            case 2:
                console.log('\n\nListar todos as Produtos\n\n')
                
                keyPress();
                break;
            case 3:
                console.log('\n\nListar Produto pelo ID\n\n')

                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar Produto\n\n");

                keyPress()
                break;
            case 5:
                console.log("\n\nDeletar Produto\n\n");

                keyPress()
                break;
            case 6:
                console.log("\n\nPesquisar Produto\n\n");


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