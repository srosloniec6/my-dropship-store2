export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export const catalog: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    image: "https://via.placeholder.com/300x200.png?text=Wireless+Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    image: "https://via.placeholder.com/300x200.png?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Portable Speaker",
    price: 49.99,
    image: "https://via.placeholder.com/300x200.png?text=Portable+Speaker",
  },
];
