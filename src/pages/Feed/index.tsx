import PostFeed from "../../components/PostFeed";

function Feed() {
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
      <h2>Feed</h2>
      <PostFeed></PostFeed>
    </>
  );
}

export default Feed;
