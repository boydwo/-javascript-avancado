class ListaNegociacoes {
  constructor(armadilha) {
    this._negociacoes = [];
    this._armadilha = armadilha;
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    this._armadilha(this); // chama o metodo update para atualizar planilha passando ele mesmo
    //Reflect.apply(this._armadilha, this._contexto, [this]); // troca o This da função
  }

  esvazia() {
    this._negociacoes = [];
    this._armadilha(this);
    // Reflect.apply(this._armadilha, this._contexto, [this]); // troca o This da função
  }

  get negociacoes() {
    // cria um copia da Lista (programacao defensiva)
    return [].concat(this._negociacoes);
  }



}