import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import doc1 from "../images/doc1.webp";
import doc2 from "../images/doc2.webp";
import doc3 from "../images/doc3.webp";

const Doctors = () => {

    return (
        <>  
            <div className="doctor" id="doctor">
                <h1 className="text-center title">Our Doctors & Specialist</h1>
                <p className="text-center desc" style={{marginBottom: "3rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br></br> ut labore et dolore magna aliqua.</p>
                <div className="container-fluid">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card text-center">
                                <div class="image-box">
                                    <img src={doc1} alt="Unsplashed Random" width="100%"/>
                                </div>
                                <br></br>
                                <div className="card-body"> 
                                    <h3>Dr. Lloyd Wilson</h3>
                                    <p>NEUROLOGIST</p>
                                    <p className="dr-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    <button className="lrn">Book</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card text-center">
                                <div class="image-box">
                                    <img src={doc2} alt="Unsplashed Random" width="100%"/>
                                </div>
                                <br></br>
                                <div className="card-body"> 
                                    <h3>Dr. Rachel Parker</h3>
                                    <p>PEDIATRICIAN</p>
                                    <p className="dr-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    <button className="lrn">Book</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card text-center">
                                <div class="image-box">
                                    <img src={doc3} alt="Unsplashed Random" width="100%"/>
                                </div>
                                <br></br>
                                <div className="card-body"> 
                                    <h3>Dr. Ian Smith</h3>
                                    <p>DENTIST</p>
                                    <p className="dr-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    <button className="lrn">Book</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card text-center">
                                <div class="image-box">
                                    <img src={doc1} alt="Unsplashed Random" width="100%"/>
                                </div>
                                <br></br>
                                <div className="card-body"> 
                                    <h3>Dr. Fred Mauri</h3>
                                    <p>OPHTHALMOLOGIST</p>
                                    <p className="dr-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    <button className="lrn">Book</button>
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