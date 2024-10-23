import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./swiper-custom.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const slides = [
  { id: 1, image: "/images/image-1.png" },
  { id: 2, image: "/images/image-2.png" },
  { id: 3, image: "/images/image-3.png" },
  { id: 4, image: "/images/image-4.png" },
  { id: 5, image: "/images/image-5.png" },
  { id: 6, image: "/images/image-1.png" },
  { id: 7, image: "/images/image-2.png" },
  { id: 8, image: "/images/image-3.png" },
  { id: 9, image: "/images/image-4.png" },
  { id: 10, image: "/images/image-5.png" },
  { id: 11, image: "/images/image-1.png" },
  { id: 12, image: "/images/image-2.png" },
  { id: 13, image: "/images/image-3.png" },
  { id: 14, image: "/images/image-4.png" },
  { id: 15, image: "/images/image-5.png" },
];

export default function ProductsContent() {
  const middleSlide = Math.floor(slides.length / 2);

  return (
    <div className="relative">
      <Swiper
        className="w-full"
        modules={[Navigation, Pagination, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"} // Menampilkan 3 slide sekaligus
        spaceBetween={30} // Jarak antar slide
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        initialSlide={middleSlide}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 150,
          modifier: 1.5,
          slideShadows: true,
        }}
      >
        <div className="mx-[100px]">
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="h-[552px] min-[2500px]:h-[852px] max-[1919px]:h-[452px] w-auto mb-12 min-[2500px]:mb-20 max-[1919px]:mb-14"
            >
              <img
                src={slide.image}
                alt={`Image ${slide.id}`}
                className="min-[2500px]:h-[852px] max-[1919px]:h-[452px] w-auto"
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <button className="swiper-button-next right-[-110px] min-[2500px]:right-[-180px]"></button>{" "}
      <button className="swiper-button-prev left-[-110px] min-[2500px]:left-[-180px]"></button>
    </div>
  );
}
