class NegociacaoService {
  constructor() {
    this._http = new HttpService();
  }
  obterNegociacoesDaSemana() {

    return new Promise((resolve, reject) => {
      this._http
        .get('negociacoes/semana')
        .then(negociacoes => {
          resolve(negociacoes.map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
        .catch(err => {
          console.log(err);
          reject('Não possivel obter as negociações da semana');
        });
    });
  }

  obterNegociacoesDaSemanaAnterior() {
    return new Promise((resolve, reject) => {
      this._http
        .get('negociacoes/anterior')
        .then(negociacoes => {
          resolve(negociacoes.map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
        .catch(err => {
          console.log(err);
          reject('Não possivel obter as negociações da semana');
        });
    });

  }

  obterNegociacoesDaSemanaRetrasada() {

    return new Promise((resolve, reject) => {
      this._http
        .get('negociacoes/retrasada')
        .then(negociacoes => {
          resolve(negociacoes.map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
        .catch(err => {
          console.log(err);
          reject('Não possivel obter as negociações da semana');
        });
    });

  }
}


  // FORMA MAL ESTRUTURADA
  //   return new Promise((resolve, reject) => {

  //     let xhr = new XMLHttpRequest();

  //     xhr.open('GET', 'negociacoes/retrasada');
  //     xhr.onreadystatechange = () => { // estado esperado noa ajax 4 (requisição concluida e resposta pronta);
  //       if (xhr.readyState == 4) {
  //         if (xhr.status == 200) {

  //           resolve(JSON.parse(xhr.responseText)
  //             .map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
  //         } else {
  //           console.log(xhr.responseText);
  //           reject('Não foi possivel obter as negociações');
  //         }
  //       }
  //     };
  //     xhr.send();
  //   });
  // }