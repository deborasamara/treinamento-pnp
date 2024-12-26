import { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";

function PostFeed() {
  const [post, setpost] = useState([]);

  useEffect(() => {
    handleDataPost();
  }, []);

  async function handleDataPost() {
    try {
      const response = await axiosInstance.get("publicacao/");
      setpost(response.data.results);
      console.log("response", response);
    } catch (error) {
      console.error("Erro ao carregar os posts:", error);
    }
  }

  return (
    <>
      <nav className="br-breadcrumb" aria-label="Breadcrumbs">
        <ol className="crumb-list" role="list">
          <li className="crumb home">
            <a className="br-button circle" href="javascript:void(0)">
              <span className="sr-only">Página inicial</span>
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li className="crumb" data-active="active">
            <i className="icon fas fa-chevron-right"></i>
            <span tabIndex="0" aria-current="page">
              Feed
            </span>
          </li>
        </ol>
      </nav>

      <div className="row">
        {post.length > 0 ? (
          post.map((post: any, index: number) => (
            <div className="col-sm-10" key={index} >
              <div className="br-card">
                <div className="card-header">
                  <div className="d-flex">
                    <div className="">
                      <div className="text-weight-semi-bold text-up-02">
                        {post.titulo}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-content d-flex">
                  <p>{post.descricao}</p>
                </div>
                <div className="card-footer">
                  <div className="d-flex">
                    <div className="ml-auto">
                      <button
                        className="br-button circle"
                        type="button"
                        aria-label="Ícone ilustrativo"
                      >
                        <i className="fas fa-eye" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhuma publicação encontrada.</p>
        )}
      </div>
    </>
  );
}

export default PostFeed;
