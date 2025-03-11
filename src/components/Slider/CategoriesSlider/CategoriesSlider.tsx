import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/swiper-bundle.css";

import { useSelector } from "react-redux";

import { NavLink } from "react-router";

import "./style.css";
import { RootState } from "../../../store/store";

const CategoriesSlider = () => {
  const { categories } = useSelector((state: RootState) => state.categories);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      <ul className="flex justify-between gap-3 ">
        {categories.slice(0, 5).map((category) => {
          return (
            <SwiperSlide key={category.id}>
              <li className="" key={category.id}>
                <NavLink to={`/${category.slug}`}>
                  <div>
                    <div className="">
                      <img
                        className="h-[230px]  object-cover w-full"
                        src={category.image}
                        alt="CategoryImage"
                      />
                    </div>

                    <p className="text-center pt-1 mb-15">
                      {category.name.toUpperCase()}
                    </p>
                  </div>
                </NavLink>
              </li>
            </SwiperSlide>
          );
        })}
      </ul>
    </Swiper>
  );
};

export default CategoriesSlider;
