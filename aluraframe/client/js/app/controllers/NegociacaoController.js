class NegociacaoController {

  constructor() {

    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
  }
  adiciona() {

    event.preventDefault();

    let data = DateHelper.textoParaData(this._inputData.value);

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    this._listaNegociacoes.adiciona(negociacao);
    console.log(this; _listaMegociacoes.negocioes);
  }
}