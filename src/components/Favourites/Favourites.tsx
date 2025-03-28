import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { addItemToCart, addToFavourites } from "../../store/features/userSlice";
import { RootState } from "../../store/store";
import { Product } from "../../store/features/productsSlice";
import { FC } from "react";

const Favourites: FC = () => {
  const dispatch = useDispatch();
  const { favourites, cart } = useSelector((state: RootState) => state.user);

  const handleFavourites = (e: Product): void => {
    dispatch(addToFavourites(e));
  };

  const handleAddToCart = (elem: Product): void => {
    dispatch(addItemToCart(elem));
  };

  return (
    <section className="px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] mt-[30px] ">
      {favourites.length ? (
        <div>
          <h2 className="text-3xl mb-[30px]">Избранное</h2>

          <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-[10px] ">
            {favourites.map((item) => {
              return (
                <div className="relative group/img" key={item.id}>
                  <Link
                    className="absolute top-0 bottom-0 right-0 left-0 z-3"
                    to={`/catalog/${item.id}`}
                  ></Link>
                  {/* top */}
                  <div className="overflow-hidden relative">
                    <button
                      onClick={() => handleFavourites(item)}
                      className="cursor-pointer absolute top-[5%] right-[5%] z-4"
                    >
                      <svg
                        className="group "
                        width="19.500488"
                        height="17.500092"
                        viewBox="0 0 19.5005 17.5001"
                        fill={`${
                          favourites.find((elem) => elem.id === item.id)
                            ? "red"
                            : "none"
                        } `}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          className="group-hover:stroke-amber-700"
                          id="Vector"
                          d="M17.3 9.09C19.03 7.26 19.28 4.25 17.65 2.33C17.24 1.85 16.74 1.46 16.18 1.19C15.63 0.91 15.02 0.76 14.41 0.75C13.8 0.73 13.19 0.84 12.62 1.08C12.05 1.32 11.53 1.69 11.1 2.14L9.77 3.54L8.63 2.33C6.9 0.51 4.06 0.24 2.24 1.97C1.79 2.4 1.42 2.93 1.16 3.52C0.9 4.11 0.76 4.74 0.75 5.39C0.73 6.04 0.84 6.69 1.07 7.29C1.29 7.89 1.63 8.44 2.07 8.9L9.28 16.53C9.41 16.67 9.59 16.75 9.77 16.75C9.96 16.75 10.13 16.67 10.26 16.53L17.3 9.09Z"
                          stroke={`${
                            favourites.find((elem) => elem.id === item.id)
                              ? "red"
                              : "#FFFFFF"
                          } `}
                          strokeOpacity="1.000000"
                          strokeWidth="1.500000"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="pt-[133.33%]">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-[90%] group-hover/img:opacity-100  group-hover/img:scale-[105%] transition-[scale_opacity] delay-20 duration-200"
                        src={item.images[0]}
                        alt=""
                        width={300}
                        height={463}
                      />
                    </div>

                    <span className="text-white bg-[#13ED1C] absolute left-0 bottom-0 px-2">
                      New
                    </span>
                  </div>
                  {/* bottom */}
                  <div className="flex justify-between mt-[20px]">
                    <p className="text-[20px] font-semibold">
                      {item.price} Руб.
                    </p>
                    {cart.find((elem) => elem.id === item.id) ? (
                      <Link className="z-4" to={"/cart"}>
                        <div className="cursor-pointer bg-zinc-400 p-1 text-white rounded-[8px] ">
                          В корзине
                        </div>
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="cursor-pointer z-4"
                      >
                        <svg
                          className="group"
                          width="24.000000"
                          height="24.000000"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <desc>Created with Pixso.</desc>
                          <defs />
                          <rect
                            id="Bag"
                            rx="0.000000"
                            width="23.000000"
                            height="23.000000"
                            transform="translate(0.500000 0.500000)"
                            fill="#000000"
                            fillOpacity="0"
                          />
                          <path
                            className="group-hover:stroke-amber-700"
                            id="Vector"
                            d="M20.25 6.75C20.66 6.75 21 7.08 21 7.5L21 19.5C21 19.91 20.66 20.25 20.25 20.25L3.75 20.25C3.33 20.25 3 19.91 3 19.5L3 7.5C3 7.08 3.33 6.75 3.75 6.75L20.25 6.75Z"
                            stroke="#000000"
                            strokeOpacity="1.000000"
                            strokeWidth="1.500000"
                            strokeLinejoin="round"
                          />
                          <path
                            className="group-hover:stroke-amber-700"
                            id="Vector"
                            d="M8.25 9.75L8.25 6.75C8.25 5.75 8.64 4.8 9.34 4.09C10.05 3.39 11 3 12 3C12.99 3 13.94 3.39 14.65 4.09C15.35 4.8 15.75 5.75 15.75 6.75L15.75 9.75"
                            stroke="#000000"
                            strokeOpacity="1.000000"
                            strokeWidth="1.500000"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  <p className="mt-[10px]">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-2xl text-center">В избранном ничего нет</div>
      )}
    </section>
  );
};

export default Favourites;
