class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      new NegociacoesView($('#negociacoesView')),
      'adiciona', 'esvazia');

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView($('#mensagemView')),
      'texto');

  }
  adiciona(event) {

    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());

    this._mensagem.texto = 'Negociacao adicionada com sucesso';

    this._limpaFormulario();
  }

  importaNegociacoes() {
    let service = new NegociacaoService();

    // resolve a promesa em ordem.
    Promise.all(
      [service.obterNegociacoesDaSemana(),
      service.obterNegociacoesDaSemanaAnterior(),
      service.obterNegociacoesDaSemanaRetrasada()]
    ).then((negociacoes) => {
      negociacoes
        .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
        .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
      this._mensagem.texto = 'Negociações importadas com sucesso';
    })
      .catch((err) => this._mensagem.texto = err);


    //  USANDO ESTRUTURA DE PREOMISSE UNITARIA
    // // let promise = service.obterNegociacoesDaSemana(); // promisse: resultado futuro de uma operação
    // service.obterNegociacoesDaSemana()
    //   .then((negociacoes) => { // oq esta no resolve eu pego no Then e o que esta no reject eu pego no catch
    //     negociacoes.forEach(negocicao => this._listaNegociacoes.adiciona(negocicao))
    //     this._mensagem.texto = 'Negociações da semana obtida com sucesso';
    //   })
    //   .catch((err) => this._mensagem.texto = err);

    // service.obterNegociacoesDaSemanaAnterior()
    //   .then((negociacoes) => { // oq esta no resolve eu pego no Then e o que esta no reject eu pego no catch
    //     negociacoes.forEach(negocicao => this._listaNegociacoes.adiciona(negocicao))
    //     this._mensagem.texto = 'Negociações da semana obtida com sucesso';
    //   })
    //   .catch((err) => this._mensagem.texto = err);

    // service.obterNegociacoesDaSemanaRetrasada()
    //   .then((negociacoes) => { // oq esta no resolve eu pego no Then e o que esta no reject eu pego no catch
    //     negociacoes.forEach(negocicao => this._listaNegociacoes.adiciona(negocicao))
    //     this._mensagem.texto = 'Negociações da semana obtida com sucesso';
    //   })
    //   .catch((err) => this._mensagem.texto = err);


    //  USANDO ESTRUTURA DE CALLBACK
    // sercive.obterNegociacoesDaSeman((err, negociacoes) => { // error first
    //   if (err) {
    //     this._mensagem.texto = err;
    //     return;
    //   }

    //   negociacoes.forEach(negocicao => this._listaNegociacoes.adiciona(negocicao));

  }

  apaga() {
    this._listaNegociacoes.esvazia();

    this._mensagem.texto = 'Negociações apagadas com sucesso';

  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }
  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();

  }
}