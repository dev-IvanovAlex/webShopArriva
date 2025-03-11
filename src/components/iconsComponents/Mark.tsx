import { FC } from "react";

type Props = {
  city: string;
  fill: string | undefined;
  textColor: string;
};

const Mark: FC<Props> = ({ city, fill, textColor }) => {
  return (
    <div className="group cursor-pointer flex items-center gap-x-2">
      <svg
        className="group-hover:fill-amber-600"
        width="16.000000"
        height="16.000000"
        viewBox="0 0 16 16"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 1.33C5.2 1.33 2.66 3.48 2.66 6.8C2.66 9.01 4.44 11.63 8 14.66C11.55 11.63 13.33 9.01 13.33 6.8C13.33 3.48 10.8 1.33 8 1.33ZM8 8C7.26 8 6.66 7.4 6.66 6.66C6.66 5.93 7.26 5.33 8 5.33C8.73 5.33 9.33 5.93 9.33 6.66C9.33 7.4 8.73 8 8 8Z" />
      </svg>
      <p className={`group-hover:text-gray-300 ${textColor}`}>{city}</p>
    </div>
  );
};

export default Mark;
