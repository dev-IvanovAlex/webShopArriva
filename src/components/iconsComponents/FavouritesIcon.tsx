import { FC } from "react";

type FavouritesIconProps = {
  color?: string;
};

const FavouritesIcon: FC<FavouritesIconProps> = ({ color }) => {
  return (
    <svg
      className="group"
      width="19.500488"
      height="17.500092"
      viewBox="0 0 19.5005 17.5001"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        className="group-hover:stroke-amber-700"
        id="Vector"
        d="M17.3 9.09C19.03 7.26 19.28 4.25 17.65 2.33C17.24 1.85 16.74 1.46 16.18 1.19C15.63 0.91 15.02 0.76 14.41 0.75C13.8 0.73 13.19 0.84 12.62 1.08C12.05 1.32 11.53 1.69 11.1 2.14L9.77 3.54L8.63 2.33C6.9 0.51 4.06 0.24 2.24 1.97C1.79 2.4 1.42 2.93 1.16 3.52C0.9 4.11 0.76 4.74 0.75 5.39C0.73 6.04 0.84 6.69 1.07 7.29C1.29 7.89 1.63 8.44 2.07 8.9L9.28 16.53C9.41 16.67 9.59 16.75 9.77 16.75C9.96 16.75 10.13 16.67 10.26 16.53L17.3 9.09Z"
        stroke={`${color ? color : "#FFFFFF"}`}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FavouritesIcon;
