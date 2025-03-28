import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router";
import { Product } from "../../../../store/features/productsSlice";
import {
  addItemToCart,
  addToFavourites,
} from "../../../../store/features/userSlice";
import { RootState } from "../../../../store/store";

const CardProduct: FC = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const { favourites, cart } = useSelector((state: RootState) => state.user);
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  const [product, setProduct] = useState<Product>();
  const [image, setImage] = useState("");
  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  const fetchProductData = () => {
    products.map((item) => {
      if (item.id === Number(productId)) {
        setImage(item.images[0]);
        setProduct(item);
      }
      return null;
    });
  };

  return (
    <section className="  md:flex gap-x-20 justify-between px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] mt-[30px]">
      <div className="flex gap-x-3 md:w-[50%]">
        <div className="flex flex-col gap-y-2 overflow-y-scroll w-[20%] [&::-webkit-scrollbar]:w-0 ">
          {product?.images.map((item) => {
            return (
              <div className="overflow-hidden rounded-[5px]">
                <img
                  className={`${
                    image === item ? "opacity-100" : ""
                  }  w-full h-auto  md:w-full md:h-auto  object-cover cursor-pointer scale-[100%] hover:scale-[105%] transition-all opacity-50 hover:opacity-100 rounded-[5px]`}
                  onClick={() => setImage(item)}
                  src={item}
                  alt=""
                  width={68}
                  height={102}
                />
              </div>
            );
          })}
        </div>
        <div className="w-[80%] flex flex-col grow-1">
          <img
            className="w-full max-w-[100%] max-h-[800px] object-cover object-center "
            src={image}
            alt=""
            width={532}
            height={787}
          />
        </div>
      </div>
      <div className="mt-[30px] md:mt-0 md:w-[50%]">
        <div className="flex justify-between gap-x-5 items-center">
          <h2 className="font-semibold text-3xl">{product?.title}</h2>
          <button onClick={() => dispatch(addToFavourites(product))}>
            <svg
              className="group"
              width="19.500488"
              height="17.500092"
              viewBox="0 0 19.5005 17.5001"
              fill={`${
                favourites.find((item) => item.id === product?.id)
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
                  favourites.find((item) => item.id === product?.id)
                    ? "red"
                    : "black"
                } `}
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className="mt-7">Артикул: {product?.id} </p>
        <p className="text-2xl mt-5">Цена: {product?.price} руб.</p>

        <div className="flex gap-x-3.5 items-center mt-5">
          {cart.find((item) => item.id === product?.id) ? (
            <Link to={"/cart"}>
              <button className="cursor-pointer bg-zinc-400 py-[10px] px-[15px] text-white rounded-[50px]">
                Товар добавлен в корзину
              </button>
            </Link>
          ) : (
            <button
              onClick={addToCart}
              className="cursor-pointer bg-[#565656] py-[10px] px-[15px] text-white rounded-[50px]"
            >
              В корзину
            </button>
          )}
        </div>
        <div className="mt-5">
          <div className="flex gap-x-3 mt-5">
            <p className="w-[200px]">УХОД И СТИРКА</p>
            <p className="text-center">деликатная машинная стирка</p>
          </div>
          <div className="flex gap-x-3 mt-5">
            <p className="w-[200px]">СОСТАВ</p>
            <p className="text-center">80% хлопок 20% полиэстер</p>
          </div>
          <div className="flex gap-x-3 mt-5">
            <p className="w-[200px]">СТРАНА БРЕНДА</p>
            <p className="text-center">США</p>
          </div>
        </div>
        <div className="mt-5">
          <div
            onClick={() => setHidden1(!hidden1)}
            className="cursor-pointer border-t-1 border-[#E4E4E4] pt-[30px] pb-[30px]"
          >
            <p
              className={`${
                hidden1 ? "after:rotate-135" : "after:rotate-315"
              } relative  after:border-t-2 after:border-r-2 after:absolute after:right-[2%] after:h-4 after:w-4 `}
            >
              ОПИСАНИЕ ТОВАРА
            </p>
            <p className="">{hidden1 ? "" : product?.description}</p>
          </div>
          <div
            onClick={() => setHidden2(!hidden2)}
            className="cursor-pointer border-t-1 border-[#E4E4E4] pt-[30px] pb-[30px]"
          >
            <p
              className={`${
                hidden2 ? "after:rotate-135" : "after:rotate-315"
              } relative  after:border-t-2 after:border-r-2 after:absolute after:right-[2%] after:h-4 after:w-4 `}
            >
              ТАБЛИЦА РАЗМЕРОВ
            </p>
            <p className="]">{hidden2 ? "" : product?.description}</p>
          </div>
          <div
            onClick={() => setHidden3(!hidden3)}
            className="cursor-pointer border-t-1 border-[#E4E4E4] pt-[30px] pb-[30px]"
          >
            <p
              className={`${
                hidden3 ? "after:rotate-135" : "after:rotate-315"
              } relative  after:border-t-2 after:border-r-2 after:absolute after:right-[2%] after:h-4 after:w-4 `}
            >
              ДОСТАВКА
            </p>
            <p className="mt-[30px]">{hidden3 ? "" : product?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardProduct;
