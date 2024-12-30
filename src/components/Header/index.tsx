import { useEffect, useState } from "react";
import useAuth from "../../states/authUser";
import { Link } from "react-router-dom";

function Header() {
  function clickButton() {
    console.log("cliquei aqui");
    setMenuVisible(!menuVisible);
  }

  const { user, isAuthenticated, nome } = useAuth();
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    console.log("Usuário: ", user);
    console.log("Nome: ", nome);
    console.log("Autenticado?:", isAuthenticated);
  }, [user, nome, isAuthenticated]);

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

            {isAuthenticated ? (
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
                    <Link to="/publicar" className="br-item">
                      Publicar
                    </Link>
                    <Link to="/feed" className="br-item">
                      Ver feed
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    onClick={clickButton}
                    className="br-sign-in"
                    type="button"
                    id="avatar-dropdown-trigger"
                    data-toggle="dropdown"
                    data-target="avatar-menu"
                    aria-label="Olá, Fulano"
                    style={{
                      height: "auto",
                      padding: "var(--spacing-scale-base)",
                    }}
                  >
                    <span className="br-avatar" title="Fulano da Silva">
                      <span className="content bg-orange-vivid-30 text-pure-0">
                        F
                      </span>
                    </span>
                    <span className="ml-2 text-gray-80 text-weight-regular">
                      Olá,{" "}
                      <span className="text-weight-semi-bold">
                        {nome || "Fulano"}
                      </span>
                    </span>
                    {menuVisible ? (
                      <i className="fas fa-caret-up" aria-hidden="true"></i>
                    ) : (
                      <i className="fas fa-caret-down" aria-hidden="true"></i>
                    )}
                  </button>

                  {menuVisible ? (
                    <div
                      className="br-list"
                      id="avatar-menu"
                      role="menu"
                      aria-labelledby="avatar-dropdown-trigger"
                    >
                      <a
                        className="br-item"
                        href="javascript:void(0)"
                        role="menuitem"
                      >
                        Exemplo de alguma coisa
                      </a>
                      <a
                        className="br-item"
                        href="javascript:void(0)"
                        role="menuitem"
                      >
                        Exemplo de alguma coisa
                      </a>
                      <Link to="/login" className="br-item" role="menuitem">
                        Sair
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="header-actions">
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
            )}
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
