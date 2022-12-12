import React from "react";
import "../../App.css";
import { useState } from "react";
import axios from "axios";
import Delete from "../Delete.js";

function Agenda() {
  const [putInputValue, setPutInputValue] = useState("");
  const [putInputValueId, setPutInputValueId] = useState("");

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked, email, language, bio } = e.target;
    const isCheckbox = type === "checkbox";

    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log("*** handleSubmit", data);
  };

  const executarPut = () => {
    axios
      .put("http://localhost:3000/cortes/1", {
        name: "Chris",
      })
      .then((dados) => console.log(dados));
  };

  const handlerInputValue = (e) => {
    setPutInputValue(e.target.value);
    console.log(putInputValue);
  };

  const handlerInputValueId = (e) => {
    setPutInputValueId(e.target.value);
    console.log(putInputValueId);
  };

  return (
    <>
      <form class="formag" onSubmit={handleSubmit}>
        <ul>
          <li>
            <h2>Agendamento</h2>
          </li>
          <li>
            <input
              type="text"
              name="name"
              placeholder="nome"
              onChange={handleInputChange}
              value={formValues.name || ""}
            />
          </li>
          <li>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={handleInputChange}
              value={formValues.email || ""}
            />
          </li>
          <li>
            <p>Horário:</p>
            <select
              name="language"
              onChange={handleInputChange}
              value={formValues.language || ""}
            >
              <option value="value0">selecione</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
            </select>
          </li>

          <li>
            <textarea
              name="bio"
              onChange={handleInputChange}
              value={formValues.bio || ""}
            ></textarea>
          </li>
          <li>
            <p>Nos siga nas redes sociais:</p>
          </li>
          <div class="social-icons">
            <a
              class="social-icon-link facebook"
              href="https://pt-br.facebook.com/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              class="social-icon-link instagram"
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              class="social-icon-link twitter"
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
          <li>
            <button
              class="but"
              type="submit"
              onClick={() =>
                axios
                  .post("http://localhost:3000/agendamento", {
                    nome: formValues.name,
                    email: formValues.email,
                    horario: formValues.language,
                    comentario: formValues.bio,
                  })
                  .then((dados) => console.log(dados))
                  .catch((error) => console.log(error))
              }
            >
              Enviar
            </button>
          </li>
        </ul>
        <Delete />
        <div className="putDiv">
          <p>Você pode modificar o Valor dos nomes abaixo:</p>
          <input onChange={(e) => handlerInputValue(e)} placeholder="Valor" />
          <input onChange={(e) => handlerInputValueId(e)} placeholder="ID" />
          <button className="putButton" onClick={() => executarPut()}>
            Modificar
          </button>
        </div>
      </form>
    </>
  );
}

export default Agenda;
