import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { React } from 'react';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImg from '../images/MyHealth_Logo_onWhite-2.png';

const Footer = () => {
    
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-sm-12">
                            <div className="desc">
                                <img src={logoImg} alt="" width="90%"/>
                                <p>Firmament morning sixth subdue darkness creeping gathered divide.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="department">
                                <h3>Departments</h3>
                                <p><a href="#">Eye Care</a></p>
                                <p><a href="#">Skin Care</a></p>
                                <p><a href="#">Pathology</a></p>
                                <p><a href="#">Medicine</a></p>
                                <p><a href="#">Dental</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="address">
                                <h3>Contact</h3>
                                <p><FontAwesomeIcon icon={faLocationDot} className="footer-icon"/> 200, D-block, Green lane USA</p>
                                <p><FontAwesomeIcon icon={faPhone} className="footer-icon"/> + 10 367 467 8934</p>
                                <p><FontAwesomeIcon icon={faPrint} className="footer-icon"/> + 01 234 567 8935</p>
                                <p><FontAwesomeIcon icon={faEnvelope} className="footer-icon"/> myhealth@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="department">
                                <h3>Newsletter</h3>
                                <p>You can trust us. we only send promo offers, not a single spam.</p>
                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" class="form-inline" novalidate="true">
                                    <input className="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '" required type="email" />
                                    <button className="enter-btn">Enter</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;