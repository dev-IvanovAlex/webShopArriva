import { FC } from "react";

type Props = {
  color: string | undefined;
};

const SearchIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      className="group"
      width="24.000000"
      height="24.000000"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        id="MagnifyingGlass"
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
        d="M10.87 18.75C6.52 18.75 2.99 15.22 2.99 10.87C2.99 6.52 6.52 3 10.87 3C15.22 3 18.74 6.52 18.74 10.87C18.74 15.22 15.22 18.75 10.87 18.75Z"
        stroke={color}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
      />
      <path
        className="group-hover:stroke-amber-700"
        id="Vector"
        d="M16.44 16.44L20.99 21"
        stroke={color}
        strokeOpacity="1.000000"
        strokeWidth="1.500000"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchIcon;
