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
      <div className="row d-flex justify-content-center">
        {post.length > 0 ? (
          post.map((post: any, index: number) => (
            <div className="col-sm-10" key={index}>
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
                <div className="card-content d-flex align-items-top">
                  <div className="col-4 h-fixed">
                    <img src={post.imagem} alt="" />
                  </div>
                  <div className="col-8">
                    <p className="">
                      {post.descricao.length > 600
                        ? post.descricao.slice(0, 600) + "..."
                        : post.descricao}
                    </p>
                  </div>
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
