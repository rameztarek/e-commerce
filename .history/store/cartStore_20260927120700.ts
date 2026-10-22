import { CartStoreActionsType ,CartStoreStateType } from '@/components/types';
import { create } from 'zustand'

const useBear = create<CartStoreStateType & CartStoreActionsType>()((set) => ({
  cart: 0,
  addToCart: (product) => set((state) => ({ cart [...set.] }))
  removeFromCart: ,
  clearCart: ()=> 
}))