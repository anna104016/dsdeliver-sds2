import { defaultCoreCipherList } from "constants"
import './styles.css';
import { ReactComponent as Logo, ReactComponent} from './logo-navbar.svg';

function Navbar(){
    return(
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logo-text">DS Delivery</a> 

        </nav>
    )
}

export default Navbar;