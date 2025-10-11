import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './CategoryType'
import { blockContentType } from './blockContentTypes'
import { productType } from './productType'
import { orderType } from './orderType'
import { brandType } from './brandTypes'
import { blogType } from './blogType'
import { blogCategoryType } from './blogCategoryType'
import { authorType } from './authorType'
import { addressType } from './addressTypes'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType,blockContentType,productType,orderType,brandType,blogType,blogCategoryType,authorType,addressType],
}
