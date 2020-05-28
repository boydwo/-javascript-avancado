class ListaNegociacoes {
  constructor(armadilha) {
    this._negociacoes = [];
    this._armadilha = armadilha;
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    this._armadilha(this); // chama o metodo update para atualizar planilha passando ele mesmo
  }

  esvazia() {
    this._negociacoes = [];
    this._armadilha(this);
  }

  get negociacoes() {
    // cria um copia da Lista (programacao defensiva)
    return [].concat(this._negociacoes);
  }



}