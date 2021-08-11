import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export const Loading = ({
  height = "h-screen",
  size = "3x",
  width = "w-screen"
}) => (
  <div className={`flex flex-wrap ${height} ${width} justify-center items-center text-2xl p-6`}>
    <FontAwesomeIcon icon={faCircleNotch} spin size={size} className="text-primary" />
  </div>
)
