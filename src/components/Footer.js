import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { React } from 'react';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logoImg from '../images/MyHealth_Logo_onWhite-2.png';

const Footer = () => {
    
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-sm-12">
                            <div className="desc">
                                <img src={logoImg} alt="" width="100%"/>
                                <p style={{marginBottom: "2rem"}}>Firmament morning sixth subdue darkness creeping gathered divide.</p>
                                <a className="fb-icon"><FontAwesomeIcon icon={faFacebookF}/></a>
                                <a className="twit-icon"><FontAwesomeIcon icon={faTwitter}/></a>
                                <a className="ig-icon"><FontAwesomeIcon icon={faInstagram}/></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="department">
                                <h3>Departments</h3>
                                <p><a href="#"><FontAwesomeIcon icon={faArrowRightLong} className="footer-icon" /> Eye Care</a></p>
                                <p><a href="#"><FontAwesomeIcon icon={faArrowRightLong} className="footer-icon" /> Skin Care</a></p>
                                <p><a href="#"><FontAwesomeIcon icon={faArrowRightLong} className="footer-icon" /> Pathology</a></p>
                                <p><a href="#"><FontAwesomeIcon icon={faArrowRightLong} className="footer-icon" /> Medicine</a></p>
                                <p><a href="#"><FontAwesomeIcon icon={faArrowRightLong} className="footer-icon" /> Dental</a></p>
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
                        {/* <div className="col-lg-12 col-sm-12">
                            <p className="text-center copy">Copyright © 2024 by <span><a href="#">Jesnin Vence</a></span></p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;