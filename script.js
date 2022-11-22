var contadorAzul = 0 
var contadorAmarelo = 0 
var contadorVerde = 0 
var contadorRosa = 0 



const trocaClasse = (cor)=>{
   const main = document.querySelector('#main');
   main.className= "main";
   main.classList.add(cor);
//    main.classList.add("")

    if(cor === 'azul'){
        contadorAzul++;
        document.querySelector("#contadorAzul").innerHTML='Azul: ' +contadorAzul;
    }

    if(cor === 'verde'){
        contadorVerde++;
        document.querySelector("#contadorVerde").innerHTML='Verde: ' +contadorVerde;
    }

    if(cor === 'amarelo'){
        contadorAmarelo++;
        document.querySelector("#contadorAmarelo").innerHTML='Amarelo: ' +contadorAmarelo;
    }

    if(cor === 'rosa'){
        contadorRosa++;
        document.querySelector("#contadorRosa").innerHTML='Rosa: ' +contadorRosa;
    }
    
    
    

}

const zerarContador = ()=>{
    contadorAzul = 0 
    contadorAmarelo = 0 
    contadorVerde = 0 
    contadorRosa = 0 
    
    document.querySelector("#contadorAmarelo").innerHTML='Amarelo: ' +contadorAmarelo;
    document.querySelector("#contadorRosa").innerHTML='Rosa: ' +contadorRosa;
    document.querySelector("#contadorVerde").innerHTML='Verde: ' +contadorVerde;
    document.querySelector("#contadorAzul").innerHTML='Azul: ' +contadorAzul;
}

