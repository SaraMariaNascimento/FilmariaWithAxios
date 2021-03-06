import './style.css';
import {useParams, useNavigate, Navigate} from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState} from 'react';
import {toast} from 'react-toastify';

export default function Filme(){
    const{id} = useParams();
    const navigate = useNavigate();
    const [filme, setFilmes] = useState([]);
    const [loading, setLoading] = useState([true]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`)
            if(response.data.length === 0){
                //acessar pagina nao existente
                Navigate.replace(`/`);
                return;
            }
            setFilmes(response.data);
            setLoading(false);
        }
        loadFilmes();

        return()=>{
            console.log('componente desmontado')
        }
    },[navigate,id]);

function salvaFilme(){
    const minhaLista = localStorage.getItem('filmes');

    let filmesSalvos = JSON.parse(minhaLista)  || [];

    //se o filme estiver salvo, ignore
    
    const hasFilme = filmesSalvos.some( (filmeSalvo)=> filmeSalvo.id === filme.id)

    if(hasFilme){
        toast.info('você já possui esse filme salvo.')
        return
        //para a execução 
    }

    filmesSalvos.push(filme)
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
    toast.success('filme salvo com sucesso')
}



    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando Informações</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
         <h1>{filme.nome}</h1>
         <img src={filme.foto} alt={filme.nome}/>
         <h3>Sinopse</h3>
         {filme.sinopse}
         <div className="botoes">
             <button onClick={salvaFilme}>Salvar</button>
             <button>
                 <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`} >
                     Trailer
                 </a>
             </button>
         </div>
        </div>
    )
}