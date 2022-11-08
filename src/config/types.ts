export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductCardProps {
  id: number;
  description: string;
  image: string;
  price: number;
  rating: number;
  stock: number;
  title: string;
  handleAddToCart: any;
}

export interface InputProps {
  label?: string;
  type: string;
  value: string | number;
  placeholder?: string;
  onChange: any;
}

export interface ButtonProps {
  label: string;
  type?: "submit" | "button";
  onClick: () => void;
  disabled?: boolean;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  stock: number;
}

export type SortBy = "ASC" | "DESC";

export interface Filters {
  category: string[];
  rating: number;
  price: number;
}
