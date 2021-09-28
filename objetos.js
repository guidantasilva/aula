let carro={
    nome:"fox",
    ano:2012,
ligar: function(){
    console.log("o carro "+this.nome+" esta ligado")
}

}
carro.ligar()

function Carro(nomeCarro, anoCarro){
    this.nome=nomeCarro
    this.ano=anoCarro
}

let gol= new Carro("gol" , "2003")
console.log(gol);