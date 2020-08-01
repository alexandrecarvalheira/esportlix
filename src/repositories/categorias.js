import config from '../config'

const URL_CATEGORIES = `${config.URL}/categorias`

function getAllWithVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaSv) =>{

        if (respostaSv.ok){

            const resposta = await respostaSv.json();
            return resposta
        }

        throw new Error('erro em dados')
    })
}

function getAll(){
    return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaSv) =>{

        if (respostaSv.ok){

            const resposta = await respostaSv.json();
            return resposta
        }

        throw new Error('erro em dados')
    })
}
export default{
    getAllWithVideos,
    getAll
}