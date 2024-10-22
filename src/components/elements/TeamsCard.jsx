import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import TeamsContent from "../atoms/TeamsContent";

export default function TeamsCard() {
  return (
    <Swiper
      className="mt-[60px] flex "
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={true}
      grabCursor={true}
      slidesPerView={3}
      spaceBetween={30}
    >
      <SwiperSlide className=" pt-[30px] pb-[50px] rounded-[10px] shadow-lg flex flex-col items-center w-[370px] mb-[30px] mt-[10px]">
        <TeamsContent />
      </SwiperSlide>
      <SwiperSlide className=" pt-[30px] pb-[50px] rounded-[10px] shadow-lg flex flex-col items-center w-[370px] mb-[30px] mt-[10px]">
        <TeamsContent />
      </SwiperSlide>
      <SwiperSlide className=" pt-[30px] pb-[50px] rounded-[10px] shadow-lg flex flex-col items-center w-[370px] mb-[30px] mt-[10px]">
        <TeamsContent />
      </SwiperSlide>
      <SwiperSlide className=" pt-[30px] pb-[50px] rounded-[10px] shadow-lg flex flex-col items-center w-[370px] mb-[30px] mt-[10px]">
        <TeamsContent />
      </SwiperSlide>
      <SwiperSlide className=" pt-[30px] pb-[50px] rounded-[10px] shadow-lg flex flex-col items-center w-[370px] mb-[30px] mt-[10px]">
        <TeamsContent />
      </SwiperSlide>
      <SwiperSlide className=" pt-[30px] pb-[50px] rounded-[10px] shadow-lg flex flex-col items-center w-[370px] mb-[30px] mt-[10px]">
        <TeamsContent />
      </SwiperSlide>
      <SwiperSlide className=" pt-[30px] pb-[50px] rounded-[10px] shadow-lg flex flex-col items-center w-[370px] mb-[30px] mt-[10px]">
        <TeamsContent />
      </SwiperSlide>
      <SwiperSlide className=" pt-[30px] pb-[50px] rounded-[10px] shadow-lg flex flex-col items-center w-[370px] mb-[30px] mt-[10px]">
        <TeamsContent />
      </SwiperSlide>
    </Swiper>
  );
}
