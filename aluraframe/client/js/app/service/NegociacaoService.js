class NegociacaoService {

  obterNegociacoesDaSemana() {

    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.open('GET', 'negociacoes/semana');
      xhr.onreadystatechange = () => { // estado esperado noa ajax 4 (requisição concluida e resposta pronta);
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {

            resolve(JSON.parse(xhr.responseText)
              .map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

          } else {
            console.log(xhr.responseText);
            reject('Não foi possivel obter as negociações');
          }
        }
      };
      xhr.send();
    });
  }

  obterNegociacoesDaSemanaAnterior() {

    return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest();

      xhr.open('GET', 'negociacoes/anterior');
      xhr.onreadystatechange = () => { // estado esperado noa ajax 4 (requisição concluida e resposta pronta);
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {

            resolve(JSON.parse(xhr.responseText)
              .map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
          } else {
            console.log(xhr.responseText);
            reject('Não foi possivel obter as negociações');
          }
        }
      };
      xhr.send();
    });
  }

  obterNegociacoesDaSemanaRetrasada() {

    return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest();

      xhr.open('GET', 'negociacoes/retrasada');
      xhr.onreadystatechange = () => { // estado esperado noa ajax 4 (requisição concluida e resposta pronta);
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {

            resolve(JSON.parse(xhr.responseText)
              .map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
          } else {
            console.log(xhr.responseText);
            reject('Não foi possivel obter as negociações');
          }
        }
      };
      xhr.send();
    });
  }
}