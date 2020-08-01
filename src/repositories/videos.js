import config from '../config'

const URL_VIDEOS = `${config.URL}/videos`

function create(objetoDoVideo){
    return fetch(`${URL_VIDEOS}?_embed=videos`,{
     method: 'POST',
     headers: {
         'Content-type': 'application/json',
     },
     body: JSON.stringify(objetoDoVideo),
    })
    .then(async (respostaSv) =>{

        if (respostaSv.ok){

            const resposta = await respostaSv.json();
            return resposta
        }

        throw new Error('erro em dados')
    })
}
export default{
    create
}