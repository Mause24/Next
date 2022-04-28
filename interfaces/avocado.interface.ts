interface IAvocado {
  name: string
  id: string
  sku: string
  price: number
  image: string
  attributes: Attributes
}

interface Attributes {
  description: string
  shape: string
  hardiness: string
  taste: string
}

export type { IAvocado, Attributes }
