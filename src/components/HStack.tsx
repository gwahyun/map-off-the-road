import React, { ReactNode, ComponentProps } from 'react'

function HStack<ComponentT extends keyof JSX.IntrinsicElements = 'div'>({ as, className, children, ...props }: {
    as?: ComponentT, className?: string, children: ReactNode | ReactNode[]
} & ComponentProps<ComponentT>) {
  const Component = (as || 'div') as any;
  return (
    <Component className={'flex gap-2 p-2 ' + className} {...props}>
        {children}
    </Component>
  )
}

export default HStack