import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import { Product } from 'src/pages/Dashboard/styles';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const productsData = await AsyncStorage.getItem('@Cart:Products');

      if (productsData) {
        setProducts(JSON.parse(productsData));
      }
    }
    loadProducts();
  }, []);

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem('@Cart:Products', JSON.stringify(products));
    })();
  }, [products]);

  const increment = useCallback(
    async id => {
      const productsData = products;
      productsData[productsData.findIndex(id)].quantity += 1;

      setProducts(productsData);
    },
    [products],
  );

  const addToCart = useCallback(
    async product => {
      const inCartProduct = products.find(
        cartProduct => cartProduct.id === product.id,
      );

      if (inCartProduct) {
        increment(product.id);
        return;
      }

      setProducts([...products, { ...product, quantity: 1 }]);
    },
    [increment, products],
  );

  const decrement = useCallback(
    async id => {
      const productsData = products;
      const productIndex = productsData.findIndex(id);

      if (productsData[productIndex].quantity < 2) {
        productsData.splice(productIndex, 1);
      } else {
        productsData[productIndex].quantity -= 1;
      }

      setProducts(productsData);
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
