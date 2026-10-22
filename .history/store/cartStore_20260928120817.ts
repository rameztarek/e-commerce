"use client";
import { CartStoreActionsType, CartStoreStateType } from "@/components/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
  persist(
    (set) => ({
      cart: [],
      hasHydrated: false,
      addToCart: (product) =>
        set((state) => {const existingIndex = state.cart.findIndex(p=>
          p.id === product.id 
          && p.selectedSize === product.selectedSize 
          && product.selectedColor
      )
      if(existingIndex !== -1){
        const UpdatedCart = [...state.cart]
        UpdatedCart[existingIndex].quantity += product.quantity || 1
        return{cart:UpdatedCart}
      }
      return{
        cart:[
          ...state.cart,
          {
            ...product,
            quantity: 1,
            
          }
        ]
      }
      }),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((p) => !(
          p.id === product.id 
          && p.selectedSize === product.selectedSize 
          && product.selectedColor
          )),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCartStore;
