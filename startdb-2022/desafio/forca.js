class Forca {
  constructor(palavraSecreta) {
      this.palavraSecreta = palavraSecreta;
      this.palavra = [];
      for (let i = 0; i < palavraSecreta.length; i++) {
          this.palavra.push("_");
      }
      this.letrasChutadas = [];
      this.vidas = 6;
  }
  chutar(letra) {
    if (letra.length !== 1) {
        return;
    }
    for (let i = 0; i < this.letrasChutadas.length; i++) {
      if (this.letrasChutadas[i] === letra) {
        return;
      }
    }
    var aux = 0;
    this.letrasChutadas.push(letra);
    for (let i = 0; i < this.palavraSecreta.length; i++) {
      if (this.palavraSecreta[i] === letra) {
        this.palavra[i] = letra;
        aux = 1;
      }
    }
    if (aux === 0) {
      this.vidas--;
    }
   }

  buscarEstado() { 
    if (this.vidas === 0) {
      return "perdeu";
    }
    if (this.palavra.join("") === this.palavraSecreta) {
      return "ganhou";
    }
    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
