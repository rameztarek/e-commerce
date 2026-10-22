import { create } from 'zustand'

const useBear = create<CartStoreStateType & >((set) => ({
  cart: 0,
  addToCart: () =>,
  removeFromCart: ,
  clearCart: ()=> 
}))