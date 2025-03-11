import React from "react";
import { Link } from "react-router";

import visaCard from "../../assets/VisaCard.png";
import masterCard from "../../assets/MasterCard.png";
import worldCard from "../../assets/WorldCard.png";
const Footer = () => {
  return (
    <footer className="bg-[#F6F6F6]  mt-[80px]">
      <div>
        <div className="flex justify-around pt-[80px] max-w-[900px] items-start m-auto flex-wrap gap-y-5">
          <div className="text-center ">
            <h6 className="text-[#1A1A1A] font-semibold">ПОМОЩЬ</h6>
            <div className="flex flex-col gap-3 mt-[20px] *:hover:text-amber-700">
              <Link>
                <p>МОЙ АККАУНТ</p>
              </Link>
              <Link>
                <p>ГДЕ МОЙ МАГАЗИН</p>
              </Link>
              <Link>
                <p>ДОСТАВКА И ОПЛАТА</p>
              </Link>
              <Link>
                <p>ПРАВИЛА ВОЗВРАТА</p>
              </Link>
              <Link>
                <p>НАЙТИ МАГАЗИН</p>
              </Link>
              <Link>
                <p>ПОДОБРАТЬ РАЗМЕР</p>
              </Link>
            </div>
          </div>
          <div className="text-center ">
            <h6 className="text-[#1A1A1A] font-semibold">КАТАЛОГ</h6>
            <div className="flex flex-col gap-3 mt-[20px] *:hover:text-amber-700">
              <Link>
                <p>ПОПУЛЯРНОЕ</p>
              </Link>
              <Link>
                <p>ELECTRONICS</p>
              </Link>
              <Link>
                <p>FURNITURE</p>
              </Link>
              <Link>
                <p>SHOES</p>
              </Link>
              <Link>
                <p>MISCELLANEOUS</p>
              </Link>
              <Link>
                <p>ПОДОБРАТЬ РАЗМЕР</p>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h6 className="text-[#1A1A1A] font-semibold">КОМПАНИЯ</h6>
            <div className="flex flex-col gap-3 mt-[20px] *:hover:text-amber-700">
              <Link>
                <p>О НАС</p>
              </Link>
              <Link>
                <p>ФИЛОСОФИЯ БРЕНДА</p>
              </Link>
              <Link>
                <p>БЛОГ</p>
              </Link>
              <Link>
                <p>КОНТАКТЫ</p>
              </Link>
              <Link>
                <p>FAQ</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-[60px]">
          <div className="flex justify-center items-center gap-x-2">
            <img className="w-[32px] h-[10px]" src={visaCard} alt="" />
            <img className="w-[28px] h-[17px]" src={masterCard} alt="" />
            <img className="w-[31px] h-[8px]" src={worldCard} alt="" />
          </div>
        </div>
        <div className="mt-[30px] border-t-[1px] border-[#DBDBDB]">
          <p className="text-[13px] p-[24px] text-center">
            © Copyright 2022 very neat. All Rights reserved. Условия пользования
            сайтом
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
