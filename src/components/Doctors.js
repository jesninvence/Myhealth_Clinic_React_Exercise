import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import doc1 from "../images/doc1.webp";
import doc2 from "../images/doc2.webp";
import doc3 from "../images/doc3.webp";
import {Link} from "react-router-dom";

const Doctors = () => {

    return (
        <>  
            <div className="doctor" id="doctor">
                <h1 className="text-center title">Our Doctors & Specialist</h1>
                <p className="text-center desc" style={{marginBottom: "3rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br></br> ut labore et dolore magna aliqua.</p>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div class="image-box">
                                    <img src={doc1} alt="Unsplashed Random" width="100%"/>
                                </div>
                                <br></br>
                                <div className="card-body"> 
                                    <h3>Fred Mauri</h3>
                                    <p>inappropriate behavior</p>
                                    <button className="lrn">Book</button>
                                    <button className="cntct">Contact</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div class="image-box">
                                    <img src={doc2} alt="Unsplashed Random" width="100%"/>
                                </div>
                                <br></br>
                                <div className="card-body"> 
                                    <h3>Fred Mauri</h3>
                                    <p>inappropriate behavior</p>
                                    <button className="lrn">Book</button>
                                    <button className="cntct">Contact</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div class="image-box">
                                    <img src={doc3} alt="Unsplashed Random" width="100%"/>
                                </div>
                                <br></br>
                                <div className="card-body"> 
                                    <h3>Fred Mauri</h3>
                                    <p>inappropriate behavior</p>
                                    <button className="lrn">Book</button>
                                    <button className="cntct">Contact</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div class="image-box">
                                    <img src={doc1} alt="Unsplashed Random" width="100%"/>
                                </div>
                                <br></br>
                                <div className="card-body"> 
                                    <h3>Fred Mauri</h3>
                                    <p>inappropriate behavior</p>
                                    <button className="lrn">Book</button>
                                    <button className="cntct">Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doctors;