import { useParams } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";
import { useEffect, useState } from "react";
import Comentario from "../Comentario";

interface Autor {
  id: number;
  username: string;
  nome: string;
}

interface Post {
  id: number;
  titulo: string;
  imagem: string;
  descricao: string;
  autor: Autor;
  publicado_em: string;
}

function PostAberto() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    handleGetPost();
  }, [id]);

  async function handleGetPost() {
    try {
      const response = await axiosInstance.get(`publicacao/${id}/`);
      setPost(response.data);
      console.log("response", response);
    } catch (error) {
      console.error("Erro ao carregar o post:", error);
    }
  }

  if (!post) {
    return <p>Carregando post...</p>;
  }

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-7">
          <div className="br-card">
            <div className="card-header">
              <div className="d-flex">
                <div className="">
                  <div className="text-weight-semi-bold text-up-02">
                    {post.titulo}
                  </div>
                  <div>{post.autor.nome}</div>
                  <div>
                    {new Date(post.publicado_em).toLocaleDateString("pt-BR", {
                      weekday: "long", 
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <img src={post?.imagem} alt="" />
              <p>{post.descricao}</p>
            </div>
            <div className="card-footer">
              <div className="d-flex">
                <div className="ml-auto">
                  <button
                    className="br-button circle"
                    type="button"
                    aria-label="Ícone ilustrativo 3"
                  >
                    <i className="fas fa-comment" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Comentario></Comentario>
      </div>
    </>
  );
}

export default PostAberto;
