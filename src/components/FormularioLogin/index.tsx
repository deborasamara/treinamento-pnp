import { useForm } from "react-hook-form";
import axiosInstance from "../../services/axiosInstance";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "../../states/authUser";

interface LoginForm {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

function FormularioLogin() {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleLogin(values: LoginForm) {
    axiosInstance
      .post("login/", values)
      .then((response) => {
        // Manipular a resposta e guardar o token de acesso que vai ser importante depois
        const token = response.data.access;

        if (token) {
          // se existir um token
          login(token); // passa o token para a função de login do arquivo do zustand
          navigate("/feed");
        } else {
          console.error("Token não retornado pelo backend.");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div
        className="br-modal container"
        aria-modal="true"
        role="dialog"
        aria-labelledby="modalalerttitle"
      >
        <div className="br-modal-header">
          <div className="modal-title" id="modalalerttitle">
            Login
          </div>
        </div>
        <form className="forms-register" onSubmit={handleSubmit(handleLogin)}>
          <div className="br-modal-body">
            <div className="mb-3">
              <div className="br-input small">
                <label htmlFor="input-icon-small">Usuário</label>
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </div>
                  <input
                    className="small"
                    id="username"
                    type="text"
                    placeholder="Digite um nome de usuário"
                    {...register("username", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="br-input small">
                <label htmlFor="input-icon-small">Senha</label>
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fas fa-lock" aria-hidden="true"></i>
                  </div>
                  <input
                    className="small"
                    id="password"
                    type="password"
                    placeholder="Digite a sua senha"
                    {...register("password", { required: true })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="br-modal-footer justify-content-end">
            <button className="br-button secondary" type="button">
              Limpar
            </button>
            <button className="br-button primary ml-2" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormularioLogin;
