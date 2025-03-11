import { FC } from "react";

import menuShirt from "../../assets/menu-shirt.png";
import menuHoodie from "../../assets/menu-hoodie.png";
import menuLongslive from "../../assets/menu-longslive.png";
import menuSwitshirt from "../../assets/menu-switshirt.png";

import menuPopup1 from "../../assets/menu-popup-1.png";
import menuPopup2 from "../../assets/menu-popup-2.png";

type Props = {
  setVisiblePopUp: (value: boolean) => any;
};

const BigPopupMenu: FC<Props> = ({ setVisiblePopUp }) => {
  return (
    <div className=" mt-[20px]  px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] transition-all absolute right-0 left-0">
      <div
        className="flex gap-10 px-[15px] py-[47px] lg:px-[74px] lg:py-[47px] justify-between"
        style={{ backgroundColor: "#F6F6F6" }}
      >
        <div>
          <h3 className="text-left">МУЖЧИНАМ</h3>
          <ul className="flex flex-col gap-3 items-start mt-[30px] **:cursor-pointer **:text-left">
            <li>
              <button>Просмотреть всё</button>
            </li>
            <li>
              <button>Бестселлеры</button>
            </li>
            <li>
              <button>Новое в разделе "Одежда"</button>
            </li>
            <li>
              <button>Пуховики и куртки</button>
            </li>
            <li>
              <button>Худи и Свитшоты</button>
            </li>
            <li>
              <button>Джинсы</button>
            </li>
            <li>
              <button>Футболки</button>
            </li>
            <li>
              <button>Свитера</button>
            </li>
            <li>
              <button>Джоггеры</button>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-left">НОВИНКИ БРЕНДОВ</h3>
          <ul className="flex flex-col gap-3 items-start mt-[30px] **:cursor-pointer **:text-left">
            <li>
              <button>Adidas</button>
            </li>
            <li>
              <button>New Balance</button>
            </li>
            <li>
              <button>Bape</button>
            </li>
            <li>
              <button>Nike</button>
            </li>
            <li>
              <button>Carhartt</button>
            </li>
            <li>
              <button>Vlone</button>
            </li>
            <li>
              <button>The North Face</button>
            </li>
            <li>
              <button>Gap</button>
            </li>
            <li>
              <button>Vanse</button>
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-left">ТОП ИЗБРАННЫХ</h3>
          <div className="grid grid-cols-2 gap-9 mt-[25px] *:cursor-pointer">
            <div>
              <div className="bg-[#F1F1F1] w-[84px] h-[84px] rounded-[50px] flex justify-center items-center">
                <img className="w-[50px] h-[47px]" src={menuShirt} alt="" />
              </div>
              <p className="mt-[10px]">Футболки</p>
            </div>
            <div>
              <div className="bg-[#F1F1F1] w-[84px] h-[84px] rounded-[50px] flex justify-center items-center">
                <img className="w-[42px] h-[47px]" src={menuHoodie} alt="" />
              </div>
              <p className="mt-[10px]">Худи</p>
            </div>
            <div>
              <div className="bg-[#F1F1F1] w-[84px] h-[84px] rounded-[50px] flex justify-center items-center">
                <img className="w-[38px] h-[47px]" src={menuSwitshirt} alt="" />
              </div>
              <p className="mt-[10px]">Свитшоты</p>
            </div>
            <div>
              <div className="bg-[#F1F1F1] w-[84px] h-[84px] rounded-[50px] flex justify-center items-center">
                <img className="w-[52px] h-[47px]" src={menuLongslive} alt="" />
              </div>
              <p className="mt-[10px]">Лонгсливы</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <div className="flex justify-between items-center bg-white cursor-pointer">
            <h3 className="text-left pl-[30px]">ХУДИ И ТОЛСТОВКИ</h3>
            <img className="w-[129px] h-[147px]" src={menuPopup1} alt="" />
          </div>
          <div className="flex justify-between items-center bg-white cursor-pointer">
            <h3 className="text-left pl-[30px]">ВЕТРОВКИ</h3>
            <img className="w-[97px] h-[147px]" src={menuPopup2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigPopupMenu;
