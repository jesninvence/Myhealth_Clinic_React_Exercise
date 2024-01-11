import "../style.css";
import doctors from '../images/Doctors.gif';

const LandingPage = () => {

    return (
        <>  
            <div className="background"></div>
            <div className="landingPage">
                <div className="container-fluid">
                    <div className="row g-3">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <h5>Caring for better life</h5>
                                <h1>We <span>care about </span>
                                  your <span>health</span>
                                </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.
                                </p>
                                <button className="book">Book an Appointment</button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 hide-md display-lg hide-sm hide-xs">
                            <img src={doctors} width="100%"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;