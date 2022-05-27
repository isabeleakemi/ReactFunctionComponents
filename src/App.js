import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core";
import 'fontsource-roboto';
import { validarCPF, validarSenha } from "./models/cadastro"
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
import Axios from 'axios';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  /* console.log(dados); */
  Axios.post("http://localhost:3001/register", {
    email: dados.email,
    senha: dados.senha
  }).then((response) => {
    console.log(response);
  })
}



export default App;
