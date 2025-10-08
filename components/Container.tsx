import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({children,className}:{children:React.ReactNode,className?:string}) => {
  //agr hum props pass krein ga tw wo classname apply hojye gi nhi tw jo humne cn ma di wo apply hogi
  return (
    <div className={cn("max-w-screen-xl mx-auto px-4",className)}>{children}</div>
  )
}

export default Container