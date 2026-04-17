import {Link} from "react-router-dom"
import stukLogoBranco from '../../assets/StukLogoBranco.svg'

export default function Registro(){
    return(
        <div className="page-container">
        
                    <div className="background-container">
                        <div className="menu-logo">
                            <img 
                                src={stukLogoBranco} 
                                alt="Logo STUK branco" 
                                className="stuklogoBranco"
                            />
                            <h4>Gerencie seus usuários de forma simples e eficiente</h4>
                        </div>
                    </div>
        
                    <div className="login-container">
        
                        <div className="cabecalho">
                            <h1 style={{color: "#3a7bd5"}}>Criar conta</h1>
                            <h2>Preencha os dados abaixo para criar sua conta.</h2>
        
                        </div>
        
                        <div className="inputs">
                            <h5>Nome completo</h5>
                            <input className="nome" type="text" placeholder="João Silva" />

                            <h5>Email</h5>
                            <input className="email" type="text" placeholder="João@email.com" />
        
                            <h5>Senha</h5>
                            <input className="senha" type="text" placeholder="********" />

                            <h5>Confirmar senha</h5>
                            <input className="confirmarsenha" type="text" placeholder="********" />

                            <h5>Role</h5>
                            <input className="role" type="text" placeholder="Usuario"/>
                        </div>
        
                    <div className="tem-conta">        
                        <p>Já tem uma conta?</p>

                        <Link style={{color: "#3a7bd5"}} to="/login">
                             Login
                            </Link>
                        </div>

                        <div className="menu-actions">
                            <Link className="botao confirmar" to="/dashboard">
                                Criar usuario
                            </Link>
                        </div>
        
                    </div>
        
                </div>
    )

}