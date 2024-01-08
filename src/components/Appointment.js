import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import onlinedoc from "../images/OnlineDoctor-rafiki.png";

const Appointment = () => {
    return (
        <>  
            <br></br><br></br>
            <div className="line hide-sm hide-xs"></div>
            <div className="apment">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <h1>Servicing Hours</h1>
                            <p className="desc" style={{marginBottom: "3rem"}}>Lorem ipsum dolor sit amet, consectetur adipisicing <br></br> elit, sed do eiusmod tempor incididunt ut labore et <br></br> dolore magna aliqua.</p>
                            <ul className="time-list">
                                <li className="d-flex justify-content-between">
                                    <span>Monday-Friday</span>
                                    <span>08:00 am - 10:00pm</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Saturday</span>
                                    <span>08:00 am - 04:00pm</span>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>Sunday</span>
                                    <span>08:00 am - 04:00pm</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="appointment-area">
                                <form className="form-wrap" action="#">
                                    <h3 className="pb-20 text-center mb-3">Book an Appointment</h3>
                                    <input type="text" id="appointment" className="form-control" name="name" placeholder="Patient Name"></input>
                                    <input type="text" className="form-control" name="phone" placeholder="Phone"></input>
                                    <input type="email" className="form-control" name="email" placeholder="Email Address"></input>
                                    <input type="text" className="form-control" name="dop" placeholder="Date of Birth"></input>
                                    <input type="text" className="form-control" name="dop" placeholder="Disease Type"></input>
                                    <input id="datepicker2" className="dates form-control hasDatepicker" placeholder="appointment Date" type="text"></input>
                                    <textarea name="messege" className rows="5" placeholder="Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'"></textarea>
                                    <button className="primary-btn w-100 text-uppercase">Confirm Booking</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointment;