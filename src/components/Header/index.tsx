function Header() {
  return (
    <>
      <header className="br-header compact">
        <div className="container-lg ">
          <div className="header-top">
            <div className="header-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Gov.br_logo.svg/1200px-Gov.br_logo.svg.png"
                alt="logo"
              />

              <span className="br-divider vertical"></span>
              <div className="header-sign">Assinatura</div>
            </div>
            <div className="header-actions">
              <div className="header-links dropdown">
                <button
                  className="br-button circle small"
                  type="button"
                  data-toggle="dropdown"
                  aria-label="Abrir Acesso Rápido"
                >
                  <i className="fas fa-ellipsis-v" aria-hidden="true"></i>
                </button>
                <div className="br-list">
                  <div className="header">
                    <div className="title">Acesso Rápido</div>
                  </div>
                </div>
              </div>
              <div className="header-login">
                <div className="header-sign-in">
                  <button
                    className="br-sign-in small"
                    type="button"
                    data-trigger="login"
                  >
                    <i className="fas fa-user" aria-hidden="true"></i>
                    <span className="d-sm-inline">Entrar</span>
                  </button>
                </div>
                <div className="header-avatar"></div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-menu">
              <div className="header-menu-trigger">
                <button
                  className="br-button small circle"
                  type="button"
                  aria-label="Menu"
                  data-toggle="menu"
                  data-target="#main-navigation"
                  id="menu-compact"
                >
                  <i className="fas fa-bars" aria-hidden="true"></i>
                </button>
              </div>
              <div className="header-info">
                <div className="header-title">Microblog</div>
                <div className="header-subtitle">Seu blog</div>
              </div>
            </div>
            <div className="header-search">
              <div className="br-input has-icon">
                <input
                  id="searchbox-98886"
                  type="text"
                  placeholder="O que você procura?"
                />
                <button
                  className="br-button circle small"
                  type="button"
                  aria-label="Pesquisar"
                >
                  <i className="fas fa-search" aria-hidden="true"></i>
                </button>
              </div>
              <button
                className="br-button circle search-close ml-1"
                type="button"
                aria-label="Fechar Busca"
                data-dismiss="search"
              >
                <i className="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
