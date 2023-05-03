import { SVGProps } from 'react'

const CancelMark = (props: SVGProps<SVGSVGElement>) => (
  <svg width={19} height={19} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M.44 16.44a1.5 1.5 0 0 0 2.12 2.12l6.94-6.939 6.94 6.94a1.5 1.5 0 0 0 2.12-2.122L11.622 9.5l6.94-6.94A1.5 1.5 0 0 0 16.439.44L9.5 7.378 2.56.439A1.5 1.5 0 0 0 .44 2.561L7.378 9.5l-6.94 6.94Z"
      fill="#fff"
    />
  </svg>
)

export default CancelMark
