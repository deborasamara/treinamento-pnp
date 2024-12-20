function FormularioCadastro() {
  return (
    <>
      <div
        className="br-modal"
        aria-modal="true"
        role="dialog"
        aria-labelledby="modalalerttitle"
      >
        <div className="br-modal-header">
          <div className="modal-title" id="modalalerttitle">
            Cadastre-se
          </div>
        </div>
        <div className="br-modal-body">
          <form action="" className="forms-register">
            <div className="col-12 mb-3">
              <div className="br-input small">
                <label htmlFor="input-icon-small">Usuário</label>
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </div>
                  <input
                    className="small"
                    id="input-icon-small"
                    type="text"
                    placeholder="Digite um nome de usuário"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="br-input small">
                <label htmlFor="input-icon-small">Nome</label>
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </div>
                  <input
                    className="small"
                    id="input-icon-small"
                    type="text"
                    placeholder="Digite seu nome"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="br-input small">
                <label htmlFor="input-icon-small">Senha</label>
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fas fa-lock" aria-hidden="true"></i>
                  </div>
                  <input
                    className="small"
                    id="input-icon-small"
                    type="text"
                    placeholder="Digite uma senha"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="br-input small">
                <label htmlFor="input-icon-small">Confirme a senha</label>
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fas fa-lock" aria-hidden="true"></i>
                  </div>
                  <input
                    className="small"
                    id="input-icon-small"
                    type="text"
                    placeholder="Confirme sua senha"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="br-modal-footer justify-content-end">
          <button className="br-button secondary" type="button">
            Limpar
          </button>
          <button className="br-button primary ml-2" type="button">
            Cadastrar
          </button>
        </div>
      </div>
    </>
  );
}

export default FormularioCadastro;
