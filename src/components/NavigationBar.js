import "../style.css";
import "../script.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logoImg from '../images/MyHealth_Logo_onWhite-2.png';

const NavigationBar = () => {

    return (
        <> 
        <header className="fixed-top" id="header">
            <img src={logoImg} className="logo" width="20%"></img>
            <nav>
                <ul className="nav__links navigation-bar display-xl display-lg hide-md hide-sm hide-xs">
                    <li><a href="#">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#doctor">Doctors</a></li>
                    <li><a className="apt" href="#appointment">Appointment</a></li>
                </ul>
            </nav>
            {/* <button className="display-sm hide-xlg" id="mobile-button">
                <FontAwesomeIcon className="icon" icon={faBars} />
            </button> */}
            <FontAwesomeIcon className="icon hide-xl hide-lg display-md display-sm hide-xlg" id="mobile-button" icon={faBars} />
        </header>
        <div class="mobile text-center" id="mobile-content">
            <p><a href="#">Home</a></p>
            <p><a href="#services">Services</a></p>
            <p><a href="#about">About Us</a></p>
            <p><a href="#doctor">Doctors</a></p>
            <p><a className="apt-mob" href="#appointment">Appointment</a></p>

            <button className="mobile__close" id="mobile-close">
                <FontAwesomeIcon icon={faXmark} />
            </button>
            
        </div>
        </>
    )
}

export default NavigationBar;