import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import advance from '../images/advancetec.webp';
import comfortable from '../images/complace.webp';
import quality from '../images/qequip.webp';
import friendly from '../images/fstaff.webp';

const Feature = () => {

    return (
        <>
            <section className="feature-area">
                <div className="container text-center">
                    <div className="row g-3">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <img src={advance} alt="" className="img-article" width="30%"></img>
                                </div>
                                <h5>ADVANCE TECHNOLOGY</h5>
                                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <img src={comfortable} alt="" className="img-article" width="28%"></img>
                                </div>
                                <h5>COMFORTABLE PLACE</h5>
                                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <img src={quality} alt="" className="img-article" width="23%"></img>
                                </div>
                                <h5>QUALITY EQUIPMENT</h5>
                                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <img src={friendly} alt="" className="img-article" width="30%"></img>
                                </div>
                                <h5>FRIENDLY STAFF</h5>
                                <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree appear</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="line hide-sm hide-lg hide-md hide-xs"></div>
        </>
    ) 
}

export default Feature;