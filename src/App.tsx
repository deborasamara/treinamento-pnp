import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Header from "./components/Header";
import Publicar from "./pages/Publicar";
import Post from "./pages/Post";
import Feed from "./pages/Feed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <main className="container">
          <Routes>
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/publicar" element={<Publicar />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
