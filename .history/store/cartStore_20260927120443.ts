import { CartStoreActionsType ,CartStoreStateType } from '@/components/types';
import { create } from 'zustand'

const useBear = create<CartStoreStateType & CartStoreActionsType>()((set) => ({
  cart: 0 set((state) => ({ bears: state.bears + 1 }))
  addToCart: () =>,
  removeFromCart: ,
  clearCart: ()=> 
}))