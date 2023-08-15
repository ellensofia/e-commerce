import { createContext, useState } from "react";
import { Product, products } from "../../data";

type ProductContextProviderProps = {
  children: React.ReactNode;
};

export const ProductContext = createContext(products);

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
