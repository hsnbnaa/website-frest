import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import FeedbackContent from "../atoms/FeedbackContent";

export default function FeedbackCard() {
  return (
    <Swiper
      className="mt-[60px]  w-full flex items-center"
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
    >
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[800px] max-[1919px]:w-[600px]">
        <FeedbackContent />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[800px] max-[1919px]:w-[600px]">
        <FeedbackContent />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[800px] max-[1919px]:w-[600px]">
        <FeedbackContent />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[800px] max-[1919px]:w-[600px]">
        <FeedbackContent />
      </SwiperSlide>
    </Swiper>
  );
}
