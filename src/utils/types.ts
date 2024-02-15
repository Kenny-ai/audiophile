export interface ProductType {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: Image;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  includes: Includes[];
  gallery: Image[];
  others: Others[];
}

interface Includes {
  quantity: number;
  item: string;
}

export interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Others {
  slug: string;
  name: string;
  image: Image;
}

export interface CartState {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}