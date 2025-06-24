export type Coffee = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "hot" | "cold";
  bestSeller: boolean;
  featured: boolean;
};
