export type Product = {
   id: number;
   title: string;
   price: number;
   description: string;
   category: {
      hot: boolean;
      cold: boolean;
   };
   image: string;
   rating: {
      rate: number;
   };
};