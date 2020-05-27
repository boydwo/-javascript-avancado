class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }
  get negociacoes() {
    // cria um copia da Lista (programacao defensiva)
    return [].concat(this._negociacoes);
  }
}