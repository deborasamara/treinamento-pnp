function Comentario() {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-7">
          <div className="br-card">
            <div className="card-header">
              <div className="d-flex">
                <div className="">
                  <div className="text-weight-semi-bold text-up-02">
                    titulo
                  </div>
                  <div>nome</div>
                  <div>
                    data
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <img src="#" alt="" />
              <p>descrição</p>
            </div>
            <div className="card-footer">
              <div className="d-flex">
                <div className="ml-auto">
                  <button
                    className="br-button circle"
                    type="button"
                    aria-label="Ícone ilustrativo 3"
                  >
                    <i className="fas fa-heart" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comentario;
