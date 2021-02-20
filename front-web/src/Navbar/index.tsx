import './styles.css';
import { ReactComponent as Logo, ReactComponent} from './logo-navbar.svg';
import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <nav className="main-navbar">

            <div className="navbar-left">
                <Link to="/">
                    <Logo />
                </Link>
                <Link to="/" className="logo-text">Ds Deliver</Link>
            </div>


            <div className="navbar-rigth">
                <Link to="/login" className="navbar-btn-login">Entrar</Link>
            </div>
                
                
        </nav>
    )
}

export default Navbar;