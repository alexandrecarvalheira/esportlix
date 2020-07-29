import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, e) {
    setValues({
      ...values,
      [key]: e,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute("name"), e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }
  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange}/>
        <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange}/>
        <FormField label="cor" type="color" name="cor" value={values.cor} onChange={handleChange}/>
        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria.nome}</li>;
        })}
      </ul>
      <Link to="/"> Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
