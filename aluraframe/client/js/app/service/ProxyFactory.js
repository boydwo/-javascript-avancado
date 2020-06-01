class ProxyFactory {

  static create(objeto, props, acao) {
    return new Proxy(objeto, { // cria proxy
      get(target, prop, receiver) {    // target objeto (lista negocicaos), value que esta sendo passado no objeto
        if (props.includes(prop) && typeof (target[prop]) == typeof (Function)) { // verifica se a prop q foi chama é alguma daquela e  se é uma function
          return function () { //substitui o metodo/função por essa função nova:
            console.log(`interceptando ${prop}`);
            Reflect.apply(target[prop], target, arguments); // faz a função receber os parametros dela.
            return acao(target); //self._negociacoesView.update(target);
          }
        }
        return Reflect.get(target, prop, receiver);
      }
    });
  }

}