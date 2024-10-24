import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import FeedbackContent from "../atoms/FeedbackContent";

export default function FeedbackCard() {
  return (
    <Swiper
      className="mt-[60px] min-[2500px]:mt-[120px] w-full flex items-center"
      modules={[Autoplay, Pagination, EffectCoverflow]}
      effect={"coverflow"}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={10}
      slidesPerView={"auto"}
      initialSlide={1}
      coverflowEffect={{
        rotate: 0,
        stretch: 250,
        depth: 150,
        modifier: 1.5,
        slideShadows: true,
      }}
      breakpoints={{
        375: {
          slidesPerView: 1,
          effect: "slide",
          initialSlide: 0,
        },
        850: {
          slidesPerView: "auto",
          effect: "coverflow",
          spaceBetween: 30,
          centeredSlides: true,
        },
      }}
    >
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[800px] min-[2500px]:w-[1100px] max-[1919px]:w-[600px] mb-[70px]">
        <FeedbackContent />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[800px] min-[2500px]:w-[1100px] max-[1919px]:w-[600px] mb-[70px]">
        <FeedbackContent />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[800px] min-[2500px]:w-[1100px] max-[1919px]:w-[600px] mb-[70px]">
        <FeedbackContent />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[800px] min-[2500px]:w-[1100px] max-[1919px]:w-[600px] mb-[70px]">
        <FeedbackContent />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[800px] min-[2500px]:w-[1100px] max-[1919px]:w-[600px] mb-[70px]">
        <FeedbackContent />
      </SwiperSlide>
    </Swiper>
  );
}
