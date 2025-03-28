import { Link, NavLink } from "react-router";
import { useEffect, useRef, useState } from "react";
import { FC } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleForm } from "../store/features/userSlice";
import { Product } from "../store/features/productsSlice";

import Mark from "./iconsComponents/Mark";
import SearchIcon from "./iconsComponents/SearchIcon";
import FavouritesIcon from "./iconsComponents/FavouritesIcon";
import ProfileIcon from "./iconsComponents/ProfileIcon";
import CartIcon from "./iconsComponents/CartIcon";
import HomeImage from "../assets/home.png";

const Navbar: FC = () => {
  const { categories } = useSelector((state: RootState) => state.categories);
  const { products } = useSelector((state: RootState) => state.products);
  const { currentUser, cart } = useSelector((state: RootState) => state.user);

  const [toggleSearch, setToggleSearch] = useState(false);
  const [filteredSearch, setFilteredSearch] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const burgerRef = useRef<HTMLDivElement>(null);
  const [profileData, setProfiledata] = useState({
    name: "Вход | регистрация",
    avatar:
      "https://avatars.dzeninfra.ru/get-zen_doc/9835822/pub_6506b9aa40251217268b308a_6506bb0a0b441c1b5999ab25/scale_1200",
  });

  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
  };

  useEffect(() => {
    if (!currentUser) {
      setProfiledata({
        name: "Вход",
        avatar:
          "https://avatars.dzeninfra.ru/get-zen_doc/9835822/pub_6506b9aa40251217268b308a_6506bb0a0b441c1b5999ab25/scale_1200",
      });
    } else setProfiledata(currentUser);
  }, [currentUser]);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const searchFilter = () => {
    if (searchValue.length > 0) {
      const filtered = products.filter((product) => {
        if (product.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return product;
        } else return;
      });
      setFilteredSearch(filtered);
    } else setFilteredSearch([]);
  };

  const closeSearchHandle = () => {
    linkTransitionSearchHandle();
    setVisible(false);
  };
  const linkTransitionSearchHandle = () => {
    setToggleSearch(false);
    setSearchValue("");
    setFilteredSearch([]);
  };

  useEffect(() => {
    searchFilter();
  }, [searchValue]);

  const cartLength = () => {
    let data = cart.reduce((summ, item, id, arr) => {
      summ = summ + item.quantity;
      return summ;
    }, 0);
    return data;
  };

  return (
    <header>
      <div
        className="text-white flex justify-between gap-x-1 h-20 items-center px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%]"
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
          <ul className=" gap-x-1 justify-center *:hover:text-amber-700 hidden md:flex flex-wrap">
            <li>
              <NavLink
                className={(navData) =>
                  (navData.isActive ? "text-orange-300 " : "") +
                  "px-2 lg:px-4 py-0.5 align-middle"
                }
                to={`/`}
              >
                HOME
              </NavLink>
            </li>
            {categories.slice(0, 5).map((category: any) => {
              return (
                <li key={category.id}>
                  <NavLink
                    className={(navData) =>
                      (navData.isActive ? "text-orange-300 " : "") +
                      "px-2 lg:px-4 py-0.5 align-middle"
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

        <div
          onClick={handleClick}
          className="flex shrink-0 gap-x-1 items-center cursor-pointer text-center"
        >
          <img
            className="w-[30px] h-[30px] object-cover rounded-full"
            src={profileData.avatar}
            alt="img"
          />
          <p className="hover:text-amber-700">{profileData.name}</p>
        </div>

        {/* SEARCH */}

        <ul className="flex gap-1.5 items-center">
          <li className="relative hidden md:flex md:items-center gap-x-1 z-5">
            {toggleSearch ? (
              <div>
                <div
                  onClick={() => linkTransitionSearchHandle()}
                  className="fixed top-0 bottom-0 left-0 right-0 opacity-40 bg-black"
                ></div>
                <div className="relative flex ">
                  <input
                    className="outline-0 p-2 bg-zinc-700 rounded-[8px] "
                    type="search"
                    name="search"
                    placeholder="Search anything..."
                    autoComplete="off"
                    onChange={(e) => handleSearch(e)}
                    value={searchValue}
                    autoFocus
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
            <div onClick={() => setToggleSearch(true)}>
              <SearchIcon color={"white"}></SearchIcon>
            </div>
            {toggleSearch ? (
              <div className="bg-zinc-700  w-[300px] max-h-[400px] absolute  top-[40px] left-0 overflow-y-scroll [&::-webkit-scrollbar]:w-0 rounded-[8px]">
                {!filteredSearch.length && searchValue.length > 0 ? (
                  <div className="p-1">There are no products</div>
                ) : (
                  filteredSearch.map((item) => {
                    return (
                      <Link
                        onClick={() => linkTransitionSearchHandle()}
                        to={`/catalog/${item.id}`}
                      >
                        <div className="flex gap-x-2 items-center m-1 bg-z bg-zinc-900 rounded-[8px] overflow-hidden pr-2 ">
                          <div
                            className="w-[60px] h-[60px] bg-cover shrink-0"
                            style={{
                              backgroundImage: `url(${item.images[0]})`,
                            }}
                          ></div>
                          <div className="whitespace-nowrap overflow-hidden overflow-ellipsis w-[230px] ">
                            {item.title}
                          </div>
                        </div>
                      </Link>
                    );
                  })
                )}
              </div>
            ) : (
              <></>
            )}
          </li>
          <li>
            <NavLink to="/profile">
              <ProfileIcon></ProfileIcon>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/favourites"}>
              <FavouritesIcon></FavouritesIcon>
            </NavLink>
          </li>
          <li className="relative">
            <NavLink to={"/cart"}>
              <CartIcon></CartIcon>
              <span className="absolute bottom-[-25%] left-[-15%] bg-fuchsia-700 rounded-full leading-3.5 w-[15px] h-[15px] text-center text-[12px] font-semibold">
                {cartLength()}
              </span>
            </NavLink>
          </li>
        </ul>
        {visible ? (
          <div className="relative z-5 ">
            <div
              onClick={() => closeSearchHandle()}
              className="bg-zinc-900 opacity-50 fixed top-0 right-0 left-0 bottom-0 "
            ></div>

            <div
              ref={burgerRef}
              className={`fixed top-0 left-0 bottom-0 [&::-webkit-scrollbar]:w-0 bg-white transition-all z-5 overflow-scroll ${
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
                onClick={() => closeSearchHandle()}
              >
                НАЗАД
              </div>

              <div className=" relative border-1 border-gray-300  rounded-[16px] mx-4 ">
                <div className="">
                  <div className="">
                    <input
                      onClick={() => setToggleSearch(true)}
                      className="text-black p-4 w-full focus:outline-0 pr-[50px] outline-0 border-0 "
                      placeholder="Поиск"
                      type="search"
                      onChange={(e) => handleSearch(e)}
                    />
                  </div>

                  <div className="absolute right-[20px] top-[25%]">
                    <SearchIcon color={"black"}></SearchIcon>
                  </div>
                  {toggleSearch && searchValue ? (
                    <div>
                      <div className="bg-zinc-200 w-full max-h-[400px] absolute  top-[40px] left-0 overflow-y-scroll [&::-webkit-scrollbar]:w-0">
                        {!filteredSearch.length && searchValue.length > 0 ? (
                          <div className="p-1">There are no products</div>
                        ) : (
                          filteredSearch.map((item) => {
                            return (
                              <Link
                                onClick={() => closeSearchHandle()}
                                to={`/catalog/${item.id}`}
                              >
                                <div className="flex  gap-x-2 items-center m-1 bg-z bg-zinc-900 rounded-[8px] overflow-hidden pr-2">
                                  <div
                                    className="w-[60px] h-[60px] bg-cover shrink-0"
                                    style={{
                                      backgroundImage: `url(${item.images[0]})`,
                                    }}
                                  ></div>
                                  <div className="whitespace-nowrap overflow-hidden overflow-ellipsis w-[230px] ">
                                    {item.title}
                                  </div>
                                </div>
                              </Link>
                            );
                          })
                        )}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="text-red-600 text-center text-2xl font-semibold mt-[50px]">
                SALE %
              </div>
              <nav className="">
                <ul className=" gap-2.5 justify-between *:hover:text-amber-700  text-black ">
                  <li>
                    <NavLink
                      onClick={() => setVisible(false)}
                      className={(navData) =>
                        (navData.isActive ? "bg-[#e4e4e4]" : "") +
                        " p-4 flex justify-between items-center hover:bg-[#ececec]"
                      }
                      to={`/`}
                    >
                      Home
                      <img
                        className="w-[73px] h-[84px]"
                        src={HomeImage}
                        alt="HOME"
                      />
                    </NavLink>
                  </li>
                  {categories.slice(0, 5).map((category) => {
                    return (
                      <li>
                        <NavLink
                          onClick={() => setVisible(false)}
                          className={(navData) =>
                            (navData.isActive ? "bg-[#e4e4e4]" : "") +
                            " p-4 flex justify-between items-center hover:bg-[#ececec]"
                          }
                          to={`/${category.slug}`}
                        >
                          {category.name}
                          <img
                            className="w-[73px] h-[84px]"
                            src={category.image}
                            alt=""
                          />
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Navbar;
