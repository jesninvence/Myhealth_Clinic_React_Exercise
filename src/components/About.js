import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import doctor1 from "../images/Doctors2.gif";
import emer from "../images/emer.svg";
import apt from "../images/apt.svg";
import qual from "../images/qual.svg";
import compassion from "../images/compassion.png";
import innovation from "../images/innovation.png";
import consistency from "../images/consistency.png";
import accountability from "../images/accountability.png";
import accesibility from "../images/accesibility.png";

const About = () => {

    return (
        <>
            <div className="about" id="about" style={{marginTop: "5rem"}}>
                <h1 className="text-center title">About Us</h1>
                <div className="container">
                    <div className="row g-3">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img src={doctor1} alt="" className="w-100"></img>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="card">
                                <p>
                                MyHealth Clinic believes that everyone should be able to take care of their health and wellness.
                                </p>
                                <p>
                                As a multi-specialty and full-service clinic, we empower people to do so by making the quality services they need available with excellent and compassionate patient care.
                                </p>
                                <button class="button-48" role="button"><span class="text">Learn More</span></button>
                            </div>
                            <br></br><br></br>
                            <div className="row g-3 text-center banner">
                                <div className="col-lg-4 col-md-4 col-sm-4" style={{borderRight: "1px solid #dddddd"}}>
                                    <img src={emer} alt="" className="banner_item"></img>
                                    <h5>Emergency</h5>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4" style={{borderRight: "1px solid #dddddd"}}>
                                    <img src={apt} alt="" className="banner_item"></img>
                                    <h5>Appointment</h5>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4">
                                    <img src={qual} alt="" className="banner_item"></img>
                                    <h5>Qualfied</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 vision" style={{padding: "20px 0px"}}>
                            <h3 className="text-center">Our Vision</h3>
                            <p className="text-center">To be the country’s top full-service, fully-automated <br></br> partner in providing quality patient care.</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 vision" style={{padding: "20px 0px"}}>
                            <h3 className="text-center">Our Mission</h3>
                            <p className="text-center">Empowering the Filipino people with value-added <br></br> healthcare management options.</p>
                        </div>
                        <div className="col-lg-12 elementor-text">
                            <h4 className="text-center">At MyHealth, we live by these values</h4>
                            <p className="text-center" style={{fontSize: "14px", color: "#575757"}}>Empowering the Filipino people with value-added healthcare management options.</p>
                        </div>
                        <div className="elementor-img text-center">
                            <div className="container-fluid">
                                <div className="row g-0">
                                    <div className="col-lg-2 col-md-6 col-sm-6">
                                        <img src={compassion} alt=""></img>
                                        <h5>Compassion</h5>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-6">
                                        <img src={innovation} alt=""></img>
                                        <h5>Innovation</h5>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-6">
                                        <img src={consistency} alt=""></img>
                                        <h5>Consistency</h5>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-6">
                                        <img src={accountability} alt=""></img>
                                        <h5>Accountability</h5>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-6">
                                        <img src={accesibility} alt=""></img>
                                        <h5>Accesibility</h5>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-6">
                                        <img src={compassion} alt=""></img>
                                        <h5>Patient Care</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;