import React from "react";
import "./style-page/ModalRegistro.css";
import closeModalRegistro from "../../assets/icon-button/close-2.svg";
function ModalRegistro({ stateModalRegistro, handlerCLoseRegitro }) {
  return (
    <div className={`contenedor ${stateModalRegistro ? "openMostrar" : ""}`}>
      <div className="contenedor-inputs">
        <button className="close-modal" onClick={handlerCLoseRegitro}>
          <img className="btn-img-close" src={closeModalRegistro} alt="" />
        </button>
        <div className="maregin-inputs-all">
          <div className="descripcion-modal">
            <h1 className="title-modal">Regístrate</h1>
            <span className="mensaje spam-style">Es rápido y sencillo...</span>
          </div>
          <div className="contenedor-cajas">
            <div className="cont-nombreApellido style-espacios-dos-input">
              <input
                type=""
                placeholder="Nombres"
                className="nombres-modal input-style-all"
              />
              <input
                type="text"
                placeholder="Apellidos"
                className="apellidos-modal input-style-all"
              />
            </div>
            <div className="cont-correo style-espacios-un-input">
              <input
                type="text"
                placeholder=" Correo Institucional"
                className="correo-modal input-style-all"
              />
              <br />
              <span className="correotexto spam-style">
                Ejemplo:alumno.apellido@unas.edu.pe
              </span>
            </div>
            <div className="contenedor-codidomi ">
              <div className="item-contenedor-codidomi stily-input-code style-espacios-dos-input">
                <input
                  type="text"
                  placeholder="Codigo"
                  className="codigo-modal input-style-all"
                />
                <span className="codigotexto codidomi-style spam-style">
                  Solo se aceptan números
                </span>
              </div>
              <div className="item-contenedor-codidomi stily-input-domicilio style-espacios-dos-input">
                <input
                  type="text"
                  placeholder="Domicilio"
                  className="domicilio-modal input-style-all"
                ></input>
                <span className="domiciliotexto codidomi-style spam-style">
                  Direccion actual
                </span>
              </div>
            </div>
          </div>
          <footer className="pie-register">
            <button className="registrar-modal">REGISTRAR</button>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default ModalRegistro;
