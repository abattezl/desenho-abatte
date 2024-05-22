deixe a primeira palavra ;

function setup() {
  createCanvas(400, 400);

  palavra = joaogostoso();
  
}

function joaogostoso() {
  
  let palavras = ["Caminhante", "Caminho", "Caminha"];
  
  return random(palavras);
}

function inicializaCores() {
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = p
