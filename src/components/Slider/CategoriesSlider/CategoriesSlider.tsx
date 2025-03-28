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
      spaceBetween={5}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
      <ul className="flex justify-between gap-3 ">
        {categories.slice(0, 5).map((category) => {
          return (
            <SwiperSlide key={category.id}>
              <li className="group/cat" key={category.id}>
                <NavLink to={`/${category.slug}`}>
                  <div>
                    <div className="relative pt-[100%] overflow-hidden">
                      <img
                        className="h-full object-cover w-full absolute left-0 top-0 group-hover/cat:scale-105 group-hover/cat:opacity-100 opacity-90 transition-all duration-300"
                        src={category.image}
                        alt="CategoryImage"
                        width={200}
                        height={200}
                      />
                    </div>

                    <p className="mb-8 text-center pt-1 md:mb-15">
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
