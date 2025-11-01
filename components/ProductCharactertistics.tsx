import { Product } from '@/sanity.types'
import { getBrand } from '@/sanity/queries'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const ProductCharactertistics = async({product}:{product:Product | null | undefined}) => {
const brand = await getBrand(product?.slug?.current as string);

  console.log(brand)
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value=''>
        <AccordionTrigger>{product?.name}: Charactertistics</AccordionTrigger>
        <AccordionContent>
          <p>Brand: {brand && <span>{brand[0]?.brandName}</span>}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ProductCharactertistics