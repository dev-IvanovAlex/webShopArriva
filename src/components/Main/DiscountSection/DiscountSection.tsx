import VkIcon from "../../iconsComponents/VkIcon";
import InstagramIcon from "../../iconsComponents/InstagramIcon";
import YoutubeIcon from "../../iconsComponents/YoutubeIcon";

const DiscountSection = () => {
  return (
    <section className="mt-[80px] gap-5 py-[5px] px-[5px] flex flex-col justify-between bg-[#FFC803] xl:px-[76px] xl:py-[66px] items-center xl:flex-row ">
      <h2 className="text-[40px] font-semibold text-white text-center">
        Скидка 10% на подписку
      </h2>
      <form className="w-full px-2 max-w-[550px] relative" action="">
        <input
          className="outline-none bg-white rounded-4xl pl-[30px]  py-[14px] w-full"
          type="email"
          placeholder="Ваш e-mail"
        />
        <button className="block mt-2 m-auto  md:absolute md:top-0 md:right-0 md:m-0 font-semibold text-white px-[30px] py-[14px] bg-black rounded-4xl cursor-pointer">
          Подписаться
        </button>
      </form>
      <div className="flex gap-x-2.5 ml-4">
        <a
          target="_blank"
          href="http://vk.com/"
          className="hover:[&_path]:fill-amber-700"
        >
          <VkIcon />
        </a>
        <a
          target="_blank"
          href="http://instagram.com/"
          className="hover:[&_path]:fill-amber-700 "
        >
          <InstagramIcon />
        </a>
        <a
          target="_blank"
          href="http://youtube.com/"
          className="hover:[&_path]:fill-amber-700"
        >
          <YoutubeIcon />
        </a>
      </div>
    </section>
  );
};

export default DiscountSection;
