import React, { FC } from 'react';

interface IIcon {
  color: string,
  size: number
}
const Loader: FC<IIcon> = ({color, size}) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} version="1.0"  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="8" strokeLinecap="round" fill="none">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.8518518518518516s" values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1"></animateTransform>
          <animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="1.8518518518518516s" values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882" keyTimes="0;0.5;1"></animate>
        </circle>
      </svg>
    </>
  )
}


export default Loader;