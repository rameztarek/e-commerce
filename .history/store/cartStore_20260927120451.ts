import { CartStoreActionsType ,CartStoreStateType } from '@/components/types';
import { create } from 'zustand'

const useBear = create<CartStoreStateType & CartStoreActionsType>()((set) => ({
  cart: 0,
  addToCart: () => set((state) => ({ bears: state.bears + 1 }))
  removeFromCart: ,
  clearCart: ()=> 
}))