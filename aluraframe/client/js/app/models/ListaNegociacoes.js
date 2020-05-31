class ListaNegociacoes {
  constructor(armadilha) {
    this._negociacoes = [];

    //this._armadilha = armadilha;
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);

  }

  esvazia() {
    this._negociacoes = [];

    //this._armadilha(this);
    // Reflect.apply(this._armadilha, this._contexto, [this]); // troca o This da função
  }

  get negociacoes() {
    // cria um copia da Lista (programacao defensiva)
    return [].concat(this._negociacoes);
  }



}