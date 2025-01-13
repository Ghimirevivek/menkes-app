import React from "react";
import { Path, Svg } from "react-native-svg";

const FilterIcon = () => {
  return (
    <Svg width="22" height="20" viewBox="0 0 20 18" fill="none">
      <Path
        fillRule="evenodd" // Correct capitalization
        clipRule="evenodd"
        d="M6 1C6 0.447715 5.55228 0 5 0C4.44772 0 4 0.447715 4 1V5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H4V17C4 17.5523 4.44772 18 5 18C5.55228 18 6 17.5523 6 17V7H9C9.55229 7 10 6.55228 10 6C10 5.44772 9.55229 5 9 5H6V1ZM16 1C16 0.447715 15.5523 0 15 0C14.4477 0 14 0.447715 14 1V11H11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H14V17C14 17.5523 14.4477 18 15 18C15.5523 18 16 17.5523 16 17V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H16V1Z"
        fill="#102F82"
      />
    </Svg>
  );
};

export default FilterIcon;
