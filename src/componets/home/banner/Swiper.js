import { memo } from 'react';

import { Lazy, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slide.css';

import img1 from'./img/img1.jpg';
import img3 from'./img/img3.jpg';


export const SwiperMain = memo(() => {

    return (

        <div className="swiper-container">
            <Swiper
                style={{
                "--swiper-navigation-color": "#eb1818",
                "--swiper-pagination-color": "#eb1818",
                }}
                lazy={true}
                pagination={{ type: "progressbar",}}
                navigation={true}
                modules={[Lazy, Pagination,Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
            >
                <SwiperSlide>
                <img
                    src={img1}
                    className="swiper-lazy"
                    alt="image7"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
                <SwiperSlide>
                <img
                    src={img3}
                    className="swiper-lazy"
                    alt="image9"
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
            
            </Swiper>
        </div>

    )
})

