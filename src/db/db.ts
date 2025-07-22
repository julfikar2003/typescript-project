
export interface Product {
  id: number;
  title: string;
  img: string;
  desc: string;
  inStock: boolean; // Optional property
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Shoes 1',
    
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    desc: 'If a dog chews shoes whose shoes does he choose?',
    inStock: true
  },
  {
    id: 2,
    title: 'Shoes 2',
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    desc: 'A stylish pair for any occasion.',
    inStock: true
  },
  {
    id: 3,
    title: 'Shoes 3',
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    desc: 'Perfect fit, all-day comfort.',
    inStock: false
  },
  {
    id: 4,
    title: 'Shoes 4',
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    desc: 'Perfect fit, all-day comfort.',
    inStock: false
  },
];
