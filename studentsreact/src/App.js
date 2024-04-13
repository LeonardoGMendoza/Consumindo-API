import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import logoCadastro from './assets/e.png';
import moment from 'moment';



function App() {
  const baseUrl = "https://localhost:7184/Students";
  const [data, setData] = useState([]);

  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    pedidoGet();
  }, []);

  return (
    <div className="App">
      <br />
      <h3>Cadastro de Alunos</h3>
      <header>
        <img src={logoCadastro} alt="e" />
        <button className="btn btn-success">Incluir novo Aluno</button>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>StudentName</th>
            <th>DateOfBirth</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {data.map(aluno => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.studentName}</td>
              <td>{moment(aluno.dateOfBirth).format('DD/MM/YYYY')}</td>
              <td>{aluno.height} cm</td>
              <td>{aluno.weight} kg</td>
              <td>
                <button className="btn btn-primary">Editar</button>{""}
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
