import React from "react"

const House = ({ height, color, groupColor }) => {
  return (
    <svg height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g fill={groupColor}>
        <rect height="2" width="4" x="6" y="6" />
        <path
          d="M15.651,6.241l-7-6c-0.375-0.322-0.927-0.322-1.302,0L4,3.112V2c0-0.553-0.448-1-1-1S2,1.447,2,2v2.826 L0.349,6.241C-0.07,6.601-0.119,7.231,0.241,7.65c0.359,0.42,0.99,0.468,1.41,0.108L2,7.46V15c0,0.553,0.448,1,1,1h10 c0.552,0,1-0.447,1-1V7.46l0.349,0.299C14.538,7.921,14.769,8,15,8c0.282,0,0.562-0.118,0.76-0.35 C16.119,7.231,16.07,6.601,15.651,6.241z M12,14h-2v-4H6v4H4V5.746l4-3.428l4,3.428V14z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default House
