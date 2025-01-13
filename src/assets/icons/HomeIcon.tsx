import React from "react";
import { Path, Svg } from "react-native-svg";

interface HomeIconProps {
  color?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ color = "#94A3B8" }) => {
  return (
    <Svg width="19" height="20" viewBox="0 0 19 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.875 16.9999V8.898C0.875 8.32673 1.1193 7.78272 1.54627 7.40318L8.54627 1.18096C9.30404 0.507387 10.446 0.507387 11.2037 1.18096L18.2037 7.40318C18.6307 7.78272 18.875 8.32673 18.875 8.898V16.9999C18.875 18.6567 17.5319 19.9999 15.875 19.9999H3.875C2.21815 19.9999 0.875 18.6567 0.875 16.9999ZM5.875 13.9999C5.32272 13.9999 4.875 14.4476 4.875 14.9999C4.875 15.5522 5.32272 15.9999 5.875 15.9999H13.875C14.4273 15.9999 14.875 15.5522 14.875 14.9999C14.875 14.4476 14.4273 13.9999 13.875 13.9999H5.875Z"
        fill={color}
      />
    </Svg>
  );
};

export default HomeIcon;
