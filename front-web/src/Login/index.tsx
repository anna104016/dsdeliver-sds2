import './styles.css';
import Footer from '../Footer';
import { ReactComponent as LoginImagem, ReactComponent } from './login-imagem.svg';


function Login() {
    return (
        <>
        
            <div className="login-container">
                <div className="login-content">
                  
                        <div className="home-image">
                                <LoginImagem />
                        </div>

                            <div className="login-form">
                                <form className="form-login">
                                    <h2>Bem Vindo</h2>
                                    <div className="input-div one ">
                                     <h5 >Emaill</h5>
                                        <input className="input" type="email"  />
                                    </div>

                                    <div className="input-div two ">
                                        <h5>Senha</h5>
                                        <input className="input" type="password"  />
                                    </div>

                                    <a href="/">Esqueci minha senha</a>
                                
                                    <button className="btn-login">
                                        Entrar
                                    </button>
                                    
                                            
                                </form>
                            </div>
         
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;