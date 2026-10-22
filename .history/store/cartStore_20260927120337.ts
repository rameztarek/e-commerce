import { create } from 'zustand'

const useBear = create<CartStoreStateType & CartStoreActionsType()>((set) => ({
  cart: 0,
  addToCart: () =>,
  removeFromCart: ,
  clearCart: ()=> 
}))