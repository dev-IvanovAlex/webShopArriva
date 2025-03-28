import  { FC } from "react";
import { NavLink } from "react-router";
import { CategoriesState } from "../../store/features/categorySlice";

const CategoriesListWithImg: FC<CategoriesState> = ({ categories }) => {
  return (
    <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  mt-[80px] flex-wrap gap-x-5 items-center">
      {categories.slice(0, 5).map((category) => {
        return (
          <li className="h-full relative group/cat" key={category.id}>
            <NavLink
              className="absolute top-0 left-0 right-0 bottom-0 z-4"
              to={`/${category.slug}`}
            ></NavLink>

            <div className="pt-[100%] relative overflow-hidden rounded-[5px]">
              <img
                className="object-cover opacity-90 absolute top-0 left-0 h-full w-full group-hover/cat:scale-[105%] group-hover/cat:opacity-[100%] transition-all"
                src={category.image}
                alt="CategoryImage"
                width={300}
                height={300}
              />
            </div>

            <p className="text-center pt-1 group-hover/cat:text-amber-700">
              {category.name.toUpperCase()}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesListWithImg;
