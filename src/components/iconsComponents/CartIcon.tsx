import { FC } from "react";

const CartIcon: FC = () => {
  return (
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
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <path
        className="group-hover:stroke-amber-700"
        id="Vector"
        d="M20.25 6.75C20.66 6.75 21 7.08 21 7.5L21 19.5C21 19.91 20.66 20.25 20.25 20.25L3.75 20.25C3.33 20.25 3 19.91 3 19.5L3 7.5C3 7.08 3.33 6.75 3.75 6.75L20.25 6.75Z"
        stroke="#FFFFFF"
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
      />
      <path
        className="group-hover:stroke-amber-700"
        id="Vector"
        d="M8.25 9.75L8.25 6.75C8.25 5.75 8.64 4.8 9.34 4.09C10.05 3.39 11 3 12 3C12.99 3 13.94 3.39 14.65 4.09C15.35 4.8 15.75 5.75 15.75 6.75L15.75 9.75"
        stroke="#FFFFFF"
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CartIcon;
