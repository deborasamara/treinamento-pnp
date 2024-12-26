import { useForm } from "react-hook-form";
import axiosInstance from "../../services/axiosInstance";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ref, useEffect } from "react";

interface RegisterForm {
  username: string;
  nome: string;
  senha: string;
}

const schema = yup.object().shape({
  username: yup.string().required(),
  nome: yup.string().required(),
  senha: yup.string().required(),
});

function FormularioCadastro() {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  function handleCadastro(values: RegisterForm) {
    axiosInstance.post("cadastrar/", values)
    .then((response)=>{
      navigate("/login/");
    })
    .catch((err) => {
      console.error(err);
    });
  }

  return (
    <>
      <div
        className="br-modal"
        aria-modal="true"
        role="dialog"
        aria-labelledby="modalalerttitle"
      >
        <div className="br-modal-header">
          <div className="modal-title" id="modalalerttitle">
            Cadastre-se
          </div>
        </div>
        <form className="forms-register" onSubmit={handleSubmit(handleCadastro)}>
          <div className="br-modal-body">
            <div className="col-12 mb-3">
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
                <label htmlFor="input-icon-small">Nome</label>
                <div className="input-group">
                  <div className="input-icon">
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </div>
                  <input
                    className="small"
                    id="nome"
                    type="text"
                    placeholder="Digite seu nome"
                    {...register("nome", { required: true })}
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
                    id="senha"
                    type="password"
                    placeholder="Digite uma senha"
                    {...register("senha", { required: true })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="br-modal-footer justify-content-end">
          <button className="br-button secondary" type="button" onClick={() => reset()}>
            Limpar
          </button>
          <button className="br-button primary ml-2" type="submit">
            Cadastrar
          </button>
        </div>
        </form>
      </div>
    </>
  );
}

export default FormularioCadastro;
