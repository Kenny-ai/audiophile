export interface ProductType {
  _id: string;
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
  gallery: GalleryType[];
  others: OthersType[];
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

export interface GalleryType extends Image {
  _id: string;
}

export interface OthersType {
  _id: string;
  slug: string;
  name: string;
  image: Image;
}

export interface CartState {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
