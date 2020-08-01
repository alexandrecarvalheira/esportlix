import React, { useEffect, useState} from "react";
import PageDefault from "../../../components/PageDefault";
import { useHistory } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'


function CadastroVideo() {
  const history = useHistory()
  const [categorias, setCategorias] = useState([])
  const categoryTitles = categorias.map(({titulo}) => titulo)
  const { handleChange, values }  = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=ZijqVV1NqYQ',
    categoria: 'Front End'
  })

  useEffect(() => {
    categoriasRepository
    .getAll()
    .then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    })
  },[])
  console.log(categorias)

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault()

          const categoriaEscolhida = categorias.find((categoria)=> {
            return categoria.titulo === values.categoria
          })


        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id
        })
        .then(() => {
          console.log('sucesso')
          history.push('/')
        })

      }}>

      <FormField 
      label="Titulo do Video" 
      name="titulo" 
      value={values.titulo} 
      onChange={handleChange}
      />

      <FormField 
      label="URL do Video" 
      name="url" 
      value={values.url} 
      onChange={handleChange}
      />

      <FormField 
      label="Categoria do Video" 
      name="categoria" 
      value={values.categoria} 
      onChange={handleChange}
      suggestions={categoryTitles}
      />

  <Button type="submit">
    Cadastrar
    </Button>

        </form>      
      {/* <Link to="/cadastro/categoria"> Cadastrar categoria</Link> */}
    </PageDefault>
  );
}

export default CadastroVideo;
