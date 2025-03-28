import { Link } from "react-router";
import { useSelector } from "react-redux";

import mainImgMen from "../../assets/main-men.png";
import mainImgWomen from "../../assets/main-women.png";
import mainImgKid from "../../assets/main-kid.png";

import categoriesMain from "../../assets/categories-main.png";
import CategoriesListWithImg from "../CategoriesListWithImg/CategoriesListWithImg";
import CategoriesSlider from "../Slider/CategoriesSlider/CategoriesSlider";

import PopularSlider from "../Slider/PopularSlider/PopularSlider";
import DiscountSection from "./DiscountSection/DiscountSection";
import { RootState } from "../../store/store";

const Main = () => {
  const { categories } = useSelector((state: RootState) => state.categories);

  return (
    <main className="px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%]">
      <div className="relative">
        <div className="grid grid-cols-3 max-h-[650px] ">
          <div className="bg-[#13ED1C]">
            <img
              className="h-full object-cover m-auto"
              src={mainImgMen}
              alt="img-men"
            />
          </div>
          <div className="bg-[#FFF500]">
            <img
              className="h-full object-cover m-auto"
              src={mainImgWomen}
              alt="img-women"
            />
          </div>
          <div className="bg-[#FD6E06]">
            <img
              className="h-full object-cover m-auto"
              src={mainImgKid}
              alt="img-kid"
            />
          </div>
        </div>
        <div>
          <div className="p-[9px] absolute top-[50%] left-[50%] translate-[-50%] text-center bg-white/60 rounded-3xl sm:p-[28px] md:p-[38px] lg:p-[58px] xl:p-[88px]">
            <h1 className=" text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
              Spring mood
            </h1>
            <p className=" font-medium mt-[5px]  text-[14px] sm:text-[18px] md:text-xl md:mt-[20px] lg:text-2xl xl:text-3xl">
              -20% на новую коллекцию.
            </p>
            <button className=" font-semibold py-[8px] px-[15px]  mt-[10px] bg-[#404444] text-white rounded-4xl md:py lg:py-[18px] lg:px-[27px] text-[12px] cursor-pointer hover:text-amber-700">
              В КАТАЛОГ
            </button>
          </div>
        </div>
      </div>

      <CategoriesListWithImg categories={categories} />

      <div className="flex gap-x-2 mt-[80px] ">
        <div className="hidden  md:block bg-[#13EDED] w-[25%] ">
          <img
            src={categoriesMain}
            className="w-full h-full object-cover"
            alt="categoriesMain"
          />
        </div>
        <div className="w-[100%] md:w-[75%]">
          <div>
            <h2 className="text-[30px] font-semibold">Категории товаров</h2>
            <p className="w-[100%] md:w-[80%] mt-[20px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
              similique vero explicabo debitis dicta, aspernatur nemo quos, ea
              itaque praesentium, quo omnis? Excepturi hic facilis accusamus cum
              repellendus ex sunt. Debitis labore hic consectetur earum non
              inventore repellendus quidem harum explicabo aliquid asperiores
              cupiditate eum voluptatem placeat, quasi, voluptatum consequatur
              error quod ducimus rem. Ex sunt quam possimus natus quo!
            </p>
          </div>
          <div className="mt-[30px] ">
            <CategoriesSlider />
          </div>
        </div>
      </div>

      <div className="mt-[80px]">
        <div className="flex justify-between items-center mb-11">
          <h2 className="text-3xl font-semibold ">Популярное</h2>
          <Link to={"/catalog"}>
            <p className="flex items-center gap-x-2 uppercase text-[#565656]">
              В каталог
              <span className="inline-block relative h-[20px] w-[25px]  after:absolute after:h-[12px] after:w-[12px] after:border-t-2 after:border-r-2 after:rotate-45 after:border-[#565656] after:top-[50%] after:right-0 after:translate-y-[-50%] before:absolute before:h-[2px] before:w-[25px] before:bg-[#565656] before:top-[calc(50%-1px)] before:right-0"></span>
            </p>
          </Link>
        </div>

        <PopularSlider />
      </div>

      <DiscountSection />
    </main>
  );
};

export default Main;
