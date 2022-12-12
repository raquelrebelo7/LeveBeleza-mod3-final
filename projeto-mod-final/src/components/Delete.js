import axios from "axios";
import React from "react";
import '../components/Delete.css'

const baseURL = "http://localhost:3000/agendamento";

export default function App() {
  const [agendamento, setAgendamento] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setAgendamento(response.data);
    });
  }, []);

  function deleteAgendamento() {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        alert("Agendamento cancelado!");
        setAgendamento(null)
      });
  }

  if (!agendamento) return ""

  return (
    <div className="delete-card">
        <div className="delete-content">
            <h2>Já agendados</h2>
            <hr></hr>
            <h3><b>{agendamento.id}- {agendamento.nome}</b></h3>
            <p>Email: {agendamento.email}</p>
            <p>Horário: {agendamento.horario}</p>
            <p>Corte: {agendamento.comentario}</p>
            <button className="btn-delete red" onClick={deleteAgendamento}>Cancelar agendamento</button>
        </div>
    </div>
  );
}