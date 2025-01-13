import React from "react";
import { Path, Svg } from "react-native-svg";

interface FillProjectIconProps {
  color?: string;
}

const FillProjectIcon = ({ color = "#94A3B8" }) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.75 4C6.64543 4 5.75 4.89543 5.75 6H19.75C19.75 4.89543 18.8546 4 17.75 4H7.75ZM5.75 7C4.64543 7 3.75 7.89543 3.75 9V18C3.75 19.1046 4.64543 20 5.75 20H19.75C20.8546 20 21.75 19.1046 21.75 18V9C21.75 7.89543 20.8546 7 19.75 7H5.75Z"
        fill={color}
      />
    </Svg>
  );
};

export default FillProjectIcon;
