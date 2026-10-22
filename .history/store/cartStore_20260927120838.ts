import { CartStoreActionsType ,CartStoreStateType } from '@/components/types';
import { create } from 'zustand'

const useBear = create<CartStoreStateType & CartStoreActionsType>()((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart,product] })),
  removeFromCart: set((state) => ({ cart: state.cart.filter() }))
  clearCart: ()=> 
}))