class NegociacaoService {
  obterNegociacoesDaSeman(cb) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'negociacoes/semana');
    xhr.onreadystatechange = () => { // estado esperado noa ajax 4 (requisição concluida e resposta pronta);
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {

          cb(null, JSON.parse(xhr.responseText)
            .map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        } else {
          console.log(xhr.responseText);
          cb('Não foi possivel obter as negociações');
        }
      }
    };
    xhr.send();
  }

  obterNegociacoesDaSemanaAnterior(cb) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'negociacoes/anterior');
    xhr.onreadystatechange = () => { // estado esperado noa ajax 4 (requisição concluida e resposta pronta);
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {

          cb(null, JSON.parse(xhr.responseText)
            .map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        } else {
          console.log(xhr.responseText);
          cb('Não foi possivel obter as negociações');
        }
      }
    };
    xhr.send();
  }

  obterNegociacoesDaSemanaRetrasada(cb) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'negociacoes/retrasada');
    xhr.onreadystatechange = () => { // estado esperado noa ajax 4 (requisição concluida e resposta pronta);
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {

          cb(null, JSON.parse(xhr.responseText)
            .map((objeto) => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        } else {
          console.log(xhr.responseText);
          cb('Não foi possivel obter as negociações');
        }
      }
    };
    xhr.send();
  }
}