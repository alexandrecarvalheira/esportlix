import React, { useState, useEffect} from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from '../../../components/Button'

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

  useEffect(()=>{
    const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias' : "https://esportlix.herokuapp.com/categorias";
    fetch(URL)
    .then(async (respostaSv) =>{
      const resposta = await respostaSv.json();
      setCategorias([
        ...resposta,
      ])
    })
  },[])

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
        <FormField label="Nome da Categoria" type="text" name="nome" value={values.nome} onChange={handleChange}/>
        <FormField label="Descrição" type="textarea" name="descricao" value={values.descricao} onChange={handleChange}/>
        <FormField label="cor" type="color" name="cor" value={values.cor} onChange={handleChange}/>
        
        
        <Button>Cadastrar</Button>

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}
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
