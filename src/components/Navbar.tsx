import { Link, NavLink } from "react-router";
import { useEffect, useRef, useState } from "react";
import { FC } from "react";

import Mark from "./iconsComponents/Mark";
import SearchIcon from "./iconsComponents/SearchIcon";
import FavouritesIcon from "./iconsComponents/FavouritesIcon";
import ProfileIcon from "./iconsComponents/ProfileIcon";
import CartIcon from "./iconsComponents/CartIcon";

import sidemenu1 from "../assets/sidemenu-1.png";
import sidemenu2 from "../assets/sidemenu-2.png";
import sidemenu3 from "../assets/sidemenu-3.png";
import sidemenu4 from "../assets/sidemenu-4.png";
import { useSelector } from "react-redux";

const Navbar: FC = () => {
  const { categories } = useSelector((state) => state.categories);

  const [visible, setVisible] = useState<boolean>(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let handleModal = (e: { target: Node | null }) => {
      if (!burgerRef.current.contains(e.target)) {
        setVisible(false);
      }
    };
    window.addEventListener("mousedown", handleModal);
    return () => {
      window.removeEventListener("mousedown", handleModal);
    };
  }, [setVisible]);

  return (
    <header>
      <div
        className="text-white flex justify-between h-20 items-center px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%]"
        style={{ backgroundColor: "#1D1D1D" }}
      >
        <div className="flex gap-x-5 items-center">
          <div
            onClick={() => setVisible(true)}
            className="cursor-pointer w-[24px] h-[24px] flex items-center  md:hidden group"
          >
            <span className=" block md:hidden w-[100%] relative  h-0.5  bg-amber-50 after:w-[100%] after:absolute after:bg-amber-50 after:h-0.5 after:top-[-6px] before:absolute before:bg-amber-50 before:h-0.5 before:w-[100%] before:top-[6px] group-hover:bg-amber-700 group-hover:after:bg-amber-700 group-hover:before:bg-amber-700"></span>
          </div>

          <Link to={"/"}>
            <span style={{ fontSize: 20, fontWeight: 700 }}>LOGO</span>
          </Link>
          <div className="hidden md:block">
            <Mark
              fill={"white"}
              city={"Москва"}
              textColor={"text-white"}
            ></Mark>
          </div>
        </div>
        <nav>
          <ul className=" gap-2.5 justify-between *:hover:text-amber-700 hidden md:flex">
            {categories.slice(0, 5).map((category: any) => {
              return (
                <li key={category.id}>
                  <NavLink
                    className={(navData) =>
                      (navData.isActive ? "text-orange-300 " : "") +
                      "px-4 lg:px-7 py-3 align-middle"
                    }
                    to={`/${category.slug}`}
                  >
                    {category.name.toUpperCase()}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <ul className="flex gap-4 items-center">
          <li className="hidden md:block">
            <SearchIcon color={"white"}></SearchIcon>
          </li>
          <li>
            <NavLink to={"/profile"}>
              <ProfileIcon></ProfileIcon>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/favourites"}>
              <FavouritesIcon></FavouritesIcon>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>
              <CartIcon></CartIcon>
            </NavLink>
          </li>
        </ul>
        <div
          ref={burgerRef}
          className={`absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all z-1 ${
            visible ? "w-[80%]" : "w-0"
          }`}
        >
          <div className="flex justify-between items-center px-4 mt-3 border-b-1 border-[#DBDBDB] pb-4">
            <Link to={"/sale"}>
              <span
                className="text-black "
                style={{ fontSize: 20, fontWeight: 700 }}
              >
                LOGO
              </span>
            </Link>
            <Mark
              fill={"black"}
              city={"МОСКВА"}
              textColor={"text-black"}
            ></Mark>
          </div>
          <div
            className="text-[#565656] cursor-pointer m-2 p-3 inline-block hover:bg-[#ececec] rounded-[10px] transition-all"
            onClick={() => setVisible(false)}
          >
            НАЗАД
          </div>
          <div className=" relative border-1 border-gray-300 rounded-[16px] mx-4">
            <input
              className="text-black p-4 w-full focus:outline-0 pr-[50px]"
              type="text"
              placeholder="Поиск"
            />
            <div className="absolute right-[20px] top-[25%]">
              <SearchIcon color={"black"}></SearchIcon>
            </div>
          </div>
          <div className="text-red-600 text-center text-2xl font-semibold mt-[50px]">
            SALE %
          </div>
          <nav>
            <ul className=" gap-2.5 justify-between *:hover:text-amber-700  text-black">
              <li>
                <NavLink
                  onClick={() => setVisible(false)}
                  className={(navData) =>
                    (navData.isActive ? "bg-[#e4e4e4]" : "") +
                    " p-4 flex justify-between items-center hover:bg-[#ececec]"
                  }
                  to={"/sale"}
                >
                  SALE
                  <img className="w-[73px] h-[84px]" src={sidemenu1} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setVisible(false)}
                  className={(navData) =>
                    (navData.isActive ? "bg-[#e4e4e4]" : "") +
                    " p-4 flex justify-between items-center hover:bg-[#ececec]"
                  }
                  to={"/women"}
                >
                  ЖЕНЩИНАМ
                  <img className="w-[70px] h-[84px]" src={sidemenu2} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setVisible(false)}
                  className={(navData) =>
                    (navData.isActive ? "bg-[#e4e4e4]" : "") +
                    " p-4 flex justify-between items-center hover:bg-[#ececec]"
                  }
                  to={"/men"}
                >
                  МУЖЧИНАМ
                  <img className="w-[58px] h-[84px]" src={sidemenu3} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setVisible(false)}
                  className={(navData) =>
                    (navData.isActive ? " bg-[#e4e4e4]" : "") +
                    " p-4 flex justify-between items-center hover:bg-[#ececec]"
                  }
                  to={"/kid"}
                >
                  ДЕТЯМ
                  <img className="w-[61px] h-[84px]" src={sidemenu4} alt="" />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
