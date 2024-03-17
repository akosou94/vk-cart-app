import { FC, ReactNode } from 'react'

type Props = {
  className: string
  title?: string
  children?: ReactNode
  onClick: () => void
}

const Button: FC<Props> = ({className, title, onClick, children}) => {
  return (
    <button className={className} onClick={onClick}>{title}
    {children && children}
    </button>
  )
}

export default Button