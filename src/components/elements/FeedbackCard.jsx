import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import FeedbackContent from "../atoms/FeedbackContent";

export default function FeedbackCard() {
  return (
    <Swiper
      className="mt-[60px]"
      modules={[Autoplay, Pagination, EffectCoverflow]}
      effect={"coverflow"}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      grabCursor={true}
      spaceBetween={10}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1.5,
        slideShadows: true,
      }}
    >
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[770px]">
        <FeedbackContent />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[770px]">
        <FeedbackContent />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center px-[60px] pt-10 pb-[35px] bg-white rounded-[10px] shadow-lg w-[770px]">
        <FeedbackContent />
      </SwiperSlide>
    </Swiper>
  );
}
