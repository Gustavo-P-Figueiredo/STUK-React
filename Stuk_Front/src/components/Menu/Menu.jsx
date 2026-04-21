import {Link} from "react-router-dom"
import stukLogo from '../../assets/StukLogo.svg'
import "../../App.css"
import "./Menu.css"

export default function Menu() {
    return (
        <div className="menu-container">

            <div className="menu-logo">
                <img 
                    src={stukLogo} 
                    alt="Logo STUK" 
                    className="stuklogo"
                />

                <h4>Gerencie seus usuários de forma simples e eficiente</h4>
            </div>

            <nav className="menu-actions">
                <Link className="botao-principal" to="/login">
                    Login
                </Link>
            </nav>

        </div>
    )
}