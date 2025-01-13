import React from "react";
import { Path, Svg } from "react-native-svg";

interface ProjectIconProps {
  color?: string;
  fill?: string;
}

const ProjectIcon: React.FC<ProjectIconProps> = ({
  color = "#94A3B8",
  fill = "none",
}) => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill={fill}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.625 4C6.52043 4 5.625 4.89543 5.625 6H19.625C19.625 4.89543 18.7296 4 17.625 4H7.625ZM5.625 9H19.625V18H5.625L5.625 9ZM3.625 9C3.625 7.89543 4.52043 7 5.625 7H19.625C20.7296 7 21.625 7.89543 21.625 9V18C21.625 19.1046 20.7296 20 19.625 20H5.625C4.52043 20 3.625 19.1046 3.625 18V9Z"
        fill={color}
      />
    </Svg>
  );
};

export default ProjectIcon;
