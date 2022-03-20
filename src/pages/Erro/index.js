import './style.css';
import {Link} from 'react-router-dom';


export default function Erro(){
    return(
        <div className="errorMessage">
            <h1>404</h1>
            <h2>Ops, não encontramos essa página! &#128531;</h2>
            <Link to="/">Veja nossa lista de filmes disponíveis.</Link>
        </div>
    )
}