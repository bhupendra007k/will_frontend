import { SVGProps } from 'react'
const EditorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.333 12.667h.943l6.21-6.21-.943-.942-6.21 6.209v.943ZM14 14H2V11.17l8.957-8.956a.667.667 0 0 1 .942 0L13.785 4.1a.667.667 0 0 1 0 .942l-7.623 7.624H14V14Zm-3.515-9.428.943.943.943-.943-.943-.943-.943.943Z"
      fill="#1D2E88"
    />
  </svg>
)

export default EditorIcon
