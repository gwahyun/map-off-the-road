import React, { ComponentProps, PropsWithChildren } from 'react'
import HStack from './HStack'

export const Item = ({ children }: PropsWithChildren<{}>) => (<li className='rounded-full hover:bg-gray-100 py-1 px-2'>{children}</li>)

export const Container =({ className, children, ...props }: ComponentProps<'nav'>) => {
  return (
    <nav className={'w-full rounded-full shadow-md bg-white px-4 ' + className ?? ''} {...props} >
      <HStack className='items-center'>
          <h1 className='font-semibold text-xl '>🗺️ 지도제작자들</h1>
          <HStack as="ul">
              {children}
          </HStack>
      </HStack>
    </nav>
  )
}