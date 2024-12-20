function FormularioPostagem() {
  return (
    <>
    <h2>Publicar</h2>
      <div
        className="br-modal container"
        aria-modal="true"
        role="dialog"
        aria-labelledby="modalalerttitle"
      >
        <div className="br-modal-header">
          <div className="modal-title" id="modalalerttitle">
            Publicação
          </div>
        </div>
        <div className="br-modal-body">
          <form
            action="
        "
            className="forms-register"
          >
            <div className="mb-3">
              <div className="br-input small">
                <label htmlFor="input-icon-small">Título</label>
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fas fa-pen" aria-hidden="true"></i>
                  </div>
                  <input
                    className="small"
                    id="input-icon-small"
                    type="text"
                    placeholder="Escreva o título"
                  />
                </div>
              </div>
            </div>
            <div className="br-textarea">
              <label htmlFor="textarea-id1">Texto</label>
              <textarea
                id="textarea-id1"
                placeholder="Digite seu texto"
              ></textarea>
            </div>

            <input type="file" id="myFile" name="filename"/>

          </form>
        </div>
        <div className="br-modal-footer justify-content-end">
          <button className="br-button primary ml-2" type="button">
            Publicar
          </button>
        </div>
      </div>
    </>
  );
}

export default FormularioPostagem;
