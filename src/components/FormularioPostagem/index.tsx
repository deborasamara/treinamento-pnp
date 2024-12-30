import axiosInstance from "../../services/axiosInstance";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ref, useEffect } from "react";

interface registerPost {
  titulo: string;
  imagem: File;
  descricao: string;
}

const schema = yup.object().shape({
  titulo: yup.string().required(),
  descricao: yup.string().required(),
});

function FormularioPostagem() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  function handlePostagem(values: registerPost) {
    axiosInstance
      .post("publicacao/", values)
      .then((response) => {
        navigate("/feed/");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <h2>Publicar</h2>
      <div
        className="br-modal container"
        aria-modal="true"
        role="dialog"
        aria-labelledby="modalalerttitle"
      >
        <form
          action=""
          className=""
          onSubmit={handleSubmit(handlePostagem)}
        >
          <div className="br-modal-header">
            <div className="modal-title" id="modalalerttitle">
              Publicação
            </div>
          </div>
          <div className="br-modal-body">
              <div className="mb-3">
                <div className="br-input small">
                  <label htmlFor="input-icon-small">Título</label>
                  <div className="input-group">
                    <div className="input-icon">
                      <i className="fas fa-pen" aria-hidden="true"></i>
                    </div>
                    <input
                      className="small"
                      id="titulo"
                      type="text"
                      placeholder="Escreva o título"
                      {...register("titulo", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className="br-textarea">
                <label htmlFor="textarea-id1">Texto</label>
                <textarea
                  id="descricao"
                  placeholder="Digite seu texto"
                  {...register("descricao", { required: true })}
                ></textarea>
              </div>

              <input type="file" id="imagem" name="filename" {...register("imagem", { required: true })}/>
          </div>
          <div className="br-modal-footer justify-content-end">
            <button className="br-button primary ml-2" type="submit">
              Publicar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormularioPostagem;
