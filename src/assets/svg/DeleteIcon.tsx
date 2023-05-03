import { SVGProps } from 'react'
const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.665 2.667V1.333h6.667v1.334h3.333V4h-1.333v10a.667.667 0 0 1-.667.667H3.332A.667.667 0 0 1 2.665 14V4H1.332V2.667h3.333ZM4 4v9.333h8V4h-8Zm2 2h1.333v5.333H5.999V6Zm2.666 0H10v5.333H8.665V6Z"
      fill="#1D2E88"
    />
  </svg>
)

export default DeleteIcon
