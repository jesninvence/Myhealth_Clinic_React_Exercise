import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import teeth from '../images/teeth.svg';
import doctor7 from '../images/doctor7.webp';
import eye from '../images/eye.svg';
import ser1 from '../images/ser1.png';
import ser2 from '../images/ser2.png';
import ser3 from '../images/ser3.png';
import ser4 from '../images/ser4.png';
import ser5 from '../images/ser5.png';
import ser6 from '../images/ser6.png';
import ser7 from '../images/ser7.png';
import ser8 from '../images/ser8.png';

const Services = () => {

    return (
        <>
            <div className="services" id="services">
                <h1 className="text-center title">Our Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="card future">
                                <h5><img src={teeth} alt=""></img> Better Future</h5>
                                <p className="text-start">Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card">
                                <img src={doctor7} alt="" width="100%"></img>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card future">
                                <h5><img src={eye} alt=""></img> Better Future</h5>
                                <p className="text-start">Darkness multiply rule Which from without life creature blessed give moveth moveth seas make day which divided our have.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="services" style={{marginBottom: "5rem"}}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-12">
                            <div className="card serv text-center">
                                <div className="card-header text-center">
                                    <img src={ser1} alt=""></img>
                                </div>
                                <h5>Primary and Specialty Consultation</h5>
                                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="card serv">
                                <div className="card-header text-center">
                                    <img src={ser2} alt=""></img>
                                </div>
                                <h5>Laboratory and Diagnostics</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="card serv">
                                <div className="card-header text-center">
                                    <img src={ser3} alt=""></img>
                                </div>
                                <h5>Rehabilitation Medicine Services</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="card serv">
                                <div className="card-header text-center">
                                    <img src={ser4} alt=""></img>
                                </div>
                                <h5>Outpatient Surgery</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="card serv">
                                <div className="card-header text-center">
                                    <img src={ser5} alt=""></img>
                                </div>
                                <h5>Online Consultation Services</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="card serv">
                                <div className="card-header text-center">
                                    <img src={ser6} alt=""></img>
                                </div>
                                <h5>Home Medical Services</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="card serv">
                                <div className="card-header text-center">
                                    <img src={ser7} alt=""></img>
                                </div>
                                <h5>Corporate Clinic Management</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <div className="card serv">
                                <div className="card-header text-center">
                                    <img src={ser8} alt=""></img>
                                </div>
                                <h5>On-Site Medical Services</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line hide-sm hide-xs"></div>
        </>
    ) 
}

export default Services;