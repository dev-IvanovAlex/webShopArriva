import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  decreaseQuantity,
  deleteItemFromCart,
  increaseQuantity,
} from "../../store/features/userSlice";
import { Link } from "react-router";
import { Product } from "../../store/features/productsSlice";
import { FC } from "react";

const Cart: FC = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.user);

  const cartLength = () => {
    let data = cart.reduce((summ, item) => {
      summ = summ + item.quantity;
      return summ;
    }, 0);
    return data;
  };

  const cartPrice = () => {
    let data = cart.reduce((summ, item) => {
      summ = summ + item.quantity * item.price;
      return summ;
    }, 0);
    return data;
  };

  const handleIncreaseQuantity = (elem: Product): void => {
    dispatch(increaseQuantity(elem));
  };
  const handleDecreaseQuantity = (elem: Product): void => {
    dispatch(decreaseQuantity(elem));
  };

  const handleDeleteItemFromCart = (elem: Product): void => {
    dispatch(deleteItemFromCart(elem));
  };

  return (
    <>
      <div className="text-center mt-[30px] ">
        {!cart.length ? (
          <div className="text-2xl">В корзине ничего нет</div>
        ) : (
          <div>
            <h2 className="mb-5 text-3xl">Корзина</h2>
            <div className="max-w-[600px] m-auto p-3 border-1 border-zinc-200 rounded-[8px] flex flex-col gap-2 bg-zinc-100">
              {cart.map((item) => {
                return (
                  <div className="grid grid-cols-4 gap-3 bg-white rounded-[8px]">
                    <Link to={`/catalog/${item.id}`}>
                      <div
                        className="h-full w-full rounded-[8px]"
                        style={{
                          backgroundImage: `url(${item.images[0]})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      ></div>
                    </Link>

                    <div>
                      <div className="flex gap-x-3">
                        <p className="">{item.title}</p>
                      </div>
                    </div>
                    <div className="">
                      <p>Цена: </p>
                      <p className="text-xl"> {item.price} руб.</p>
                    </div>
                    <div>
                      <p>Количество: </p>
                      <div className="flex items-center justify-center">
                        <span
                          onClick={() => handleDecreaseQuantity(item)}
                          className="text-[25px] align-middle p-1 cursor-pointer"
                        >
                          -
                        </span>
                        <p className="text-[25px]"> {item.quantity}</p>
                        <span
                          onClick={() => handleIncreaseQuantity(item)}
                          className="text-[25px] align-middle p-1 cursor-pointer"
                        >
                          +
                        </span>
                      </div>
                      <div className="mt-4 mb-4">
                        <button
                          onClick={() => {
                            handleDeleteItemFromCart(item);
                          }}
                          className="p-1 bg-zinc-100 rounded-[8px] border-1 border-gray-200 cursor-pointer"
                        >
                          Удалить товар
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-2 max-w-[600px] m-auto">
              <div className="flex justify-between border-b-1 border-dotted">
                <p className="text-xl">Количество</p>
                <p className="text-xl">{cartLength()} шт.</p>
              </div>
              <div className="flex justify-between border-b-1 border-dotted">
                <p className="text-xl">Стоимость</p>
                <p className="text-xl">{cartPrice()} руб.</p>
              </div>
            </div>
            <div className="text-right max-w-[600px] m-[30px_auto_0_auto] ">
              <button className="bg-zinc-700 text-white p-2 rounded-[8px] cursor-pointer">
                Сделать заказ
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
