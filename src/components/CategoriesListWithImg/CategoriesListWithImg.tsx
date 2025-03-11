import React, { FC } from "react";
import { NavLink } from "react-router";
import { CategoriesState } from "../../store/features/categorySlice";

const CategoriesListWithImg: FC<CategoriesState> = ({ categories }) => {
  return (
    <ul className="flex justify-between mt-[80px] gap-3">
      {categories.slice(0, 5).map((category) => {
        return (
          <li key={category.id}>
            <NavLink to={`/${category.slug}`}>
              <div>
                <div className="">
                  <img
                    className="h-[230px] w-full object-cover"
                    src={category.image}
                    alt="CategoryImage"
                  />
                </div>

                <p className="text-center pt-1">
                  {category.name.toUpperCase()}
                </p>
              </div>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesListWithImg;
