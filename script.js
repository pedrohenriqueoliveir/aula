var mes = prompt("digite o mes atual:")

switch (mes){

    case "janeiro":
    case "fevereiro":
    case "março":
        document.write("verão")
        break;
    case "abril":
    case "maio":
    case "junho":
         document.write("outono")
         break;
    case "julho":
    case "agosto":
    case "setembro":
        document.write("inverno")
        break;
        case "outubro":
        case "novenbro":
        case "devenbro":
            document.write("primavera")
            break;
            default:
            document.write("nao existe esse mes!")

}

var opcao = number (prompt ("escolha uma opção"))
switch (opcao){
    
case 1:
    document.write("voce escolheu para cadastrar")
    break;

    case 2:
        document.write("voce escolheu escluir um usuario")
        break;
        case 3:
            document.write("voce escolheu sair")
            break;
            default:
                document.write("não existe essa opção no menu")

}

var fruta  = prompt ("qual sua fruta")
switch (fruta){

    case "maça":
    document.write("não vedemos essa fruta")
    break; 

    case "melancia":
        document.write("aqui esta são tres reais o quilo")
        break;
        default:
        document.write("não temos essa fruta")
}

if (n1>n2)
document.write("o maio numero e" + n1)
else
document.write("o maio e " + n2)