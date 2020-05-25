class Negociacao {
  constructor(data, quantidade, valor) {
    // _variavel = convenção que essas propriedades so poder ser acessados pela classe (Atributos privados)
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;
    //não é possivel alterar
    Object.freeze(this);
  }

  get volume() {
    return this._quantidade * this._valor
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }


}