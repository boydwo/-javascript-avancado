class Negociacao {
  constructor(data, quantidade, valor) {
    // _variavel = convenção que essas propriedades so poder ser acessados pela classe (Atributos privados)
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
    //não é possivel alterar
    Object.freeze(this);
  }

  get volume() {
    return this._quantidade * this._valor
  }

  get data() {
    return this._data;
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }


}