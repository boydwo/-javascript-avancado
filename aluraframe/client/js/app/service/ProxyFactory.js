class ProxyFactory {

  static create(objeto, props, acao) {
    return new Proxy(objeto, { // cria proxy
      get(target, prop, receiver) {    // target objeto (lista negocicaos), value que esta sendo passado no objeto
        if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) { // verifica se a prop q foi chama é alguma daquela e  se é uma function
          return function () { //substitui o metodo/função por essa função nova:
            console.log(`interceptando ${prop}`);
            let retorno = Reflect.apply(target[prop], target, arguments); // faz a função receber os parametros dela.
            acao(target); //self._negociacoesView.update(target);
            return retorno;
          }
        }
        return Reflect.get(target, prop, receiver);
      },

      set(target, prop, value, receiver) {
        let retorno = Reflect.set(target, prop, value, receiver);;
        if (props.includes(prop)) {
          acao(target);
        }
        return retorno;


      }
    });
  }
  static _ehFuncao(func) {
    return typeof (func) == typeof (Function);
  }
}