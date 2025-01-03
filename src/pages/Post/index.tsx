import Comentario from "../../components/Comentario";
import PostAberto from "../../components/PostAberto";

function Post() {
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
                Post
              </span>
            </li>
          </ol>
        </nav>
        <h2>Post</h2>
        <PostAberto></PostAberto>
        <Comentario></Comentario>
    </>
  );
}
export default Post;
