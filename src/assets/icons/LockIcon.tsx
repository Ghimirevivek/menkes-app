import React from "react";
import { Svg, Path } from "react-native-svg";

const LockIcon = () => {
  return (
    <Svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      //   xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2C7.34315 2 6 3.34315 6 5V6H12V5C12 3.34315 10.6569 2 9 2ZM4 5V6H3C1.34315 6 0 7.34315 0 9V17C0 18.6569 1.34315 20 3 20H15C16.6569 20 18 18.6569 18 17V9C18 7.34315 16.6569 6 15 6H14V5C14 2.23858 11.7614 0 9 0C6.23858 0 4 2.23858 4 5ZM3 8C2.44772 8 2 8.44772 2 9V17C2 17.5523 2.44772 18 3 18H15C15.5523 18 16 17.5523 16 17V9C16 8.44772 15.5523 8 15 8H3ZM10 12C10 11.4477 9.55229 11 9 11C8.44771 11 8 11.4477 8 12V14C8 14.5523 8.44771 15 9 15C9.55229 15 10 14.5523 10 14V12Z"
        fill="#020617"
      />
    </Svg>
  );
};

export default LockIcon;
