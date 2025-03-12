import {Swiper} from "swiper";
import {SwiperSlide} from "swiper/vue";
import {Pagination} from "@mui/material";
import {Autoplay, Navigation} from "swiper/modules";

const Carousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            autoplay={{delay: 3000}}
        >
            <SwiperSlide>
                <img src="Diapositiva1.png" alt="Slide 1" className="slide" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="Diapositiva2.png" alt="Slide 2" className="slide" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="Diapositiva3.png" alt="Slide 3" className="slide" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel;