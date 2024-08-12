import img1 from '../../assets/person/55.png'
import img2 from '../../assets/person/66.png'
import img3 from '../../assets/person/111.png'
import img4 from '../../assets/person/166.png'
import img5 from '../../assets/person/33.png'
import img6 from '../../assets/person/144.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
             <div className=''>
            <Swiper
                spaceBetween={30}
                // slidesPerView={1}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
            
        </div>
    );
};

export default Banner;