class MensagemView extends View {
  constructor(elemento) {
    super(elemento); // passa para a classe pai
  }
  template(model) {
    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
  }

}