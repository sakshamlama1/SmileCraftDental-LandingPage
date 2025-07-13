import "./index.css";
import Logo from '../../assets/Logo.png';
import { NavLink } from "react-router-dom";

function Header() {

    return (
        <div className="header-component">
            <div className='head-title'>
                <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={Logo} alt="Smile Craft Dental" />
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
