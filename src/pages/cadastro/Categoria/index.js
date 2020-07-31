import React, { useState, useEffect} from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";
import Button from '../../../components/Button'
import useForm from "../../../hooks/useForm";


function CadastroCategoria() {
  const valoresIniciais = {
    titulo: "",
    descricao: "",
    cor: "",
  };
  const [categorias, setCategorias] = useState([]);

  const { handleChange, values, clearForm }= useForm(valoresIniciais);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    clearForm();
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
      <h1>Cadastro de categoria: {values.titulo}</h1>

      <form onSubmit={handleSubmit}>
        <FormField label="Nome da Categoria" type="text" name="titulo" value={values.titulo} onChange={handleChange}/>
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
        {categorias.map((categoria) => {
          return <li key={`${categoria.titulo}`}>{categoria.titulo}</li>;
        })}
      </ul>
      <Link to="/"> Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
