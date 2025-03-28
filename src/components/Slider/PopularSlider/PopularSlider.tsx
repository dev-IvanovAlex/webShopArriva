import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import "./style.css";
import "swiper/swiper-bundle.css";

import { Navigation } from "swiper/modules";
import { Product, ProductsState } from "../../../store/features/productsSlice";
import { RootState } from "../../../store/store";
import CardProducts from "../../Main/CardProducts/CardProducts";

export default () => {
  const { products } = useSelector<RootState>(
    (state) => state.products
  ) as ProductsState;
  return (
    <Swiper
      breakpoints={{
        420: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
    >
      <div className="grid grid-cols-[minmax(160px,auto)] ">
        {products.map((product: Product) => {
          return (
            <SwiperSlide key={product.id}>
              <CardProducts product={product} />
            </SwiperSlide>
          );
        })}
      </div>
    </Swiper>
  );
};
