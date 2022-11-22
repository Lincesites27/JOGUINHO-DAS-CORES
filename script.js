const main = document.querySelector('#main');

const trocaClasseRosa = ()=>{
    document.getElementById('main').classList.toggle('rosa')
    document.getElementById('main').classList.remove('verde', 'azul', 'amarelo')
   
}
const trocaClasseVerde = ()=>{
    document.getElementById('main').classList.toggle('verde')
    document.getElementById('main').classList.remove('azul', 'rosa', 'amarelo')
 
}
const trocaClasseAzul = ()=>{
    document.getElementById('main').classList.toggle('azul')
    document.getElementById('main').classList.remove('verde', 'rosa', 'amarelo')
   
}
const trocaClasseAmarelo = ()=>{
    document.getElementById('main').classList.toggle('amarelo')
    document.getElementById('main').classList.remove('verde', 'azul', 'rosa')
   
}