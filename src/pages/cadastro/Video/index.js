import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

function CadastroVideo() {

  const { handleChange, values }  = useForm({
    
  })
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form>

      <FormField 
      label="Titulo do Video" 
      name="titulo" 
      value={values.titulo} 
      onChange={handleChange}
      />

  <Button type="submit">
    Cadastrar
    </Button>

        </form>      
      <Link to="/cadastro/categoria"> Cadastrar categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
