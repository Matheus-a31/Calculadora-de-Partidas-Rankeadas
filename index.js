nomeDoHeroi = "Matheus"

function saldoDeRankeadas(quantidadeDeVitorias, quantidadeDeDerrotas){
    let resultado = quantidadeDeVitorias- quantidadeDeDerrotas
    return resultado
}

function nivel(saldoDeVitorias){

    let nivelResultado=""

    if (saldoDeVitorias< 10){
        nivelResultado="Ferro"
    }
    
    else if(saldoDeVitorias < 20 && saldoDeVitorias >= 11){
        nivelResultado="Bronze"
    }
    
    else if(saldoDeVitorias < 50 && saldoDeVitorias >= 21){
        nivelResultado = "Prata"
    }
    
    else if(saldoDeVitorias < 80 && saldoDeVitorias >= 51){
        nivelResultado = "Ouro"
    }
    
    else if(saldoDeVitorias < 90 && saldoDeVitorias >= 81){
        nivelResultado = " Diamante"
    }
    
    else if(saldoDeVitorias < 100 && saldoDeVitorias >= 91){
        nivelResultado = "Lendário"
    }
        
    else if(saldoDeVitorias >= 101){
        nivelResultado= "Imortal"
    }
    
    else{
        nivelResultado = "Não está nos niveis listados."
    }
    return nivelResultado
}
nomeDoHeroi = "Matheus"
let saldoDeVitoria = saldoDeRankeadas(200, 41)
let nivelDoHeroi = nivel(saldoDeVitoria)

console.log(`O Herói de nome: ${nomeDoHeroi} tem saldo de vitoria de ${saldoDeVitoria} e está no nível ${nivelDoHeroi}`)