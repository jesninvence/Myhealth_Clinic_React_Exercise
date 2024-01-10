import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import { Virtual } from 'swiper/modules';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import commentor1 from "../images/pic1.jpg";
import commentor2 from "../images/pic2.jpg";


const Comment = () => {

    return (
        <>  
            <div className="container-fluid patient hide-xs">
                <h6 className="text-center">READ TESTIMONIALS</h6>
                <h1 className="clients">Our Patient Says</h1>
                <Swiper className="comment-swiper"
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    // navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                    <SwiperSlide>
                        <div className="card mb-3" style={{maxWidth: "550px"}}>
                            <div className="row g-0">
                                <div className="col-md-5 ">
                                    <img src={commentor1} className="img-fluid rounded-start" alt=""/>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Jake Paul</h5>
                                        <p className="card-text text-secondary">Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
                                        <p className="card-text"><small className="text-primary">Patients</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card mb-3" style={{maxWidth: "550px"}}>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img src={commentor2} className="img-fluid rounded-start" alt=""/>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Sarah Ruiz</h5>
                                        <p className="card-text text-secondary">Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
                                        <p className="card-text"><small className="text-primary">Patients</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card mb-3" style={{maxWidth: "550px"}}>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img src={commentor1} className="img-fluid rounded-start" alt=""/>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Jake Paul</h5>
                                        <p className="card-text text-secondary">Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
                                        <p className="card-text"><small className="text-primary">Patients</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card mb-3" style={{maxWidth: "550px"}}>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img src={commentor2} className="img-fluid rounded-start" alt=""/>
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Sarah Ruiz</h5>
                                        <p className="card-text text-secondary">Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
                                        <p className="card-text"><small className="text-primary">Patients</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* ... */}
                </Swiper>
            </div>
            <div className="container hide-smd hide-lg display-sm res-patient">
                <h6 className="text-center">READ TESTIMONIALS</h6>
                <h1 className="clients">Our Patient Says</h1>
                <div className="row">
                    <Swiper>
                        <div className="col-12">
                            <SwiperSlide className="swiper-mobile">
                                <div className="card mb-3" style={{maxWidth: "550px"}}>
                                    <div className="row g-0">
                                        <div className="col-md-5">
                                            <img src={commentor1} className="img-fluid rounded-start" alt=""/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h5 className="card-title">Jake Paul</h5>
                                                <p className="card-text text-secondary">Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
                                                <p className="card-text"><small className="text-primary">Patients</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="col-12">
                            <SwiperSlide>
                                <div className="card mb-3" style={{maxWidth: "550px"}}>
                                    <div className="row g-0">
                                        <div className="col-md-5">
                                            <img src={commentor2} className="img-fluid rounded-start" alt=""/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h5 className="card-title">Sarah Ruiz</h5>
                                                <p className="card-text text-secondary">Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
                                                <p className="card-text"><small className="text-primary">Patients</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="col-12">
                            <SwiperSlide>
                                <div className="card mb-3" style={{maxWidth: "550px"}}>
                                    <div className="row g-0">
                                        <div className="col-md-5">
                                            <img src={commentor1} className="img-fluid rounded-start" alt=""/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h5 className="card-title">Jake Paul</h5>
                                                <p className="card-text text-secondary">Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
                                                <p className="card-text"><small className="text-primary">Patients</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="col-12">
                            <SwiperSlide>
                                <div className="card mb-3" style={{maxWidth: "550px"}}>
                                    <div className="row g-0">
                                        <div className="col-md-5">
                                            <img src={commentor2} className="img-fluid rounded-start" alt=""/>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body">
                                                <h5 className="card-title">Sarah Ruiz</h5>
                                                <p className="card-text text-secondary">Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat bibendum orci, non elementum urna.</p>
                                                <p className="card-text"><small className="text-primary">Patients</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
            
        </>
    )
}

export default Comment;
