import React, { useRef } from "react";
import VkIcon from "../../iconsComponents/VkIcon";
import InstagramIcon from "../../iconsComponents/InstagramIcon";
import YoutubeIcon from "../../iconsComponents/YoutubeIcon";

const DiscountSection = () => {
  return (
    <section className="mt-[80px] gap-5 py-[20px] px-[20px] flex flex-col justify-between bg-[#FFC803] xl:px-[76px] xl:py-[66px] items-center xl:flex-row ">
      <h2 className="text-[40px] font-semibold text-white text-center">
        Скидка 10% на подписку
      </h2>
      <form className="flex grow-1 px-6 max-w-[550px] relative" action="">
        <input
          className="  outline-none bg-white rounded-4xl pl-[30px] pr-[140px]  py-[14px] flex-[1]"
          type="email"
          placeholder="Ваш e-mail"
        />
        <button className="absolute right-0 font-semibold text-white px-[30px] py-[14px] bg-black rounded-4xl cursor-pointer">
          Подписаться
        </button>
      </form>
      <div className="flex gap-x-2.5 ml-4">
        <VkIcon />
        <InstagramIcon />
        <YoutubeIcon />
      </div>
    </section>
  );
};

export default DiscountSection;
