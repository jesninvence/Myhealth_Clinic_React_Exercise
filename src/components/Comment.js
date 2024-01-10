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
                    <SwiperSlide>
                        <div className="testimonial">
                            <div className="pic">
                            <img src={commentor1} className="" alt=""/>
                            </div>
                            <div className="testimonial-profile">
                                <h3 className="">Steve Thomas</h3>
                                <span className="post">Patient</span>
                            </div>
                            <p className="description text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <div className="pic">
                            <img src={commentor2} className="" alt=""/>
                            </div>
                            <div className="testimonial-profile">
                                <h3 className="">Kristina</h3>
                                <span className="post">Patient</span>
                            </div>
                            <p className="description text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <div className="pic">
                            <img src={commentor1} className="" alt=""/>
                            </div>
                            <div className="testimonial-profile">
                                <h3 className="">Steve Thomas</h3>
                                <span className="post">Patient</span>
                            </div>
                            <p className="description text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial">
                            <div className="pic">
                            <img src={commentor2} className="" alt=""/>
                            </div>
                            <div className="testimonial-profile">
                                <h3 className="">Kristina</h3>
                                <span className="post">Patient</span>
                            </div>
                            <p className="description text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                            </p>
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
                            <SwiperSlide>
                                <div className="testimonial">
                                    <div className="pic">
                                    <img src={commentor1} className="" alt=""/>
                                    </div>
                                    <div className="testimonial-profile">
                                        <h3 className="">Steve Thomas</h3>
                                        <span className="post">Patient</span>
                                    </div>
                                    <p className="description text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                                    </p>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="col-12">
                            <SwiperSlide>
                                <div className="testimonial">
                                    <div className="pic">
                                    <img src={commentor2} className="" alt=""/>
                                    </div>
                                    <div className="testimonial-profile">
                                        <h3 className="">Kristina</h3>
                                        <span className="post">Patient</span>
                                    </div>
                                    <p className="description text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                                    </p>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="col-12">
                            <SwiperSlide>
                                <div className="testimonial">
                                    <div className="pic">
                                    <img src={commentor1} className="" alt=""/>
                                    </div>
                                    <div className="testimonial-profile">
                                        <h3 className="">Steve Thomas</h3>
                                        <span className="post">Patient</span>
                                    </div>
                                    <p className="description text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                                    </p>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="col-12">
                            <SwiperSlide>
                                <div className="testimonial">
                                    <div className="pic">
                                    <img src={commentor2} className="" alt=""/>
                                    </div>
                                    <div className="testimonial-profile">
                                        <h3 className="">Kristina</h3>
                                        <span className="post">Patient</span>
                                    </div>
                                    <p className="description text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                                    </p>
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
