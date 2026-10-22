import { create } from 'zustand'

const useBear = create((set) => ({
  cart: 0,
  addToCart: () => set((state) => ({ bears: state.bears + 1 })),
  removeFromCart: 
  clearCart: ()=> 
}))