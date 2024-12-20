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
      <Header></Header>
      <main className="container" >
        <BrowserRouter>
          <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/publicacoes" element={<Publicar/>} />
            <Route path="/post" element={<Post/>} />
            <Route path="/feed" element={<Feed/>} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
