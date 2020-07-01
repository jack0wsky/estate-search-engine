import React from "react"
import { NoImageWrapper } from "./noImage.styled"

const NoImage = ({ height, bgColor, color }) => {
  return (
    <NoImageWrapper>
      <svg
        height={height}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={bgColor}>
          <circle fill={color} cx="14.5" cy="11.5" r="2.5" />
          <path
            d="M31,2H1C0.448,2,0,2.447,0,3v26c0,0.553,0.448,1,1,1h30c0.552,0,1-0.447,1-1V3C32,2.447,31.552,2,31,2z M30,4v16.37l-6.252-7.034c-0.38-0.428-1.115-0.428-1.495,0l-6.145,6.912l2.955,4.939L9.64,17.231 c-0.396-0.331-0.982-0.304-1.347,0.062L2,23.586V4H30z"
            fill={color}
          />
        </g>
      </svg>
    </NoImageWrapper>
  )
}

export default NoImage
