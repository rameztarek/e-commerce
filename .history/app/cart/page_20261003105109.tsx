"use client";

import PaymentMethod from "@/components/lists/PaymentMethod";
import ShippingFom from "@/components/lists/ShippingFom";
import useCartStore from "@/store/cartStore";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shopping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];


const CartPage = (product) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const actionStep = parseInt(searchParams.get("step") || "1");
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="flex items-center flex-col gap-8  justify-center mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* STEPS */}
      <div className="flex items-center flex-col lg:flex-row gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === actionStep ? "border-gray-800" : "border-gray-200"}`}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === actionStep ? "bg-gray-800" : "bg-gray-200"}`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${step.id === actionStep ? "text-gray-800" : "text-gray-400"}`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* STEPS & DETAILS */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* STEPS */}
        <div className=" w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 ">
          {actionStep === 1 ? (
            cart.map((item) => (
              <div
                className="flex items-center justify-between"
                key={`${item.id}-${item.selectedSize}`}
              >
                {/* IMAGE & DETAILS */}
                <div className="flex gap-8">
                  {/* IMAGE */}
                  <div className=" relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden ">
                    <Image
                      src={item.images[0]}
                      alt="item.images"
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* ITEM DETAILS */}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-xs text-gray-500">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-xs text-gray-500">
                        Color: {item.selectedColor}
                      </p>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                </div>
                {/* DELETE BUTTON */}
                <button
                  onClick={() => removeFromCart(item)}
                  className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            ))
          ) : actionStep === 2 ? (
            <ShippingFom />
          ) : actionStep === 3 ? (
            <PaymentMethod />
          ) : (
            <p className="text-sm text-gray-500">
              Please Fill In Shipping Form To Continue
            </p>
          )}
        </div>
        {/* DETAILS */}
        <div className="w-full lg:w-5/12  shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max ">
          <h2 className="font-semibold">Cart Details</h2>
          <div className=" flex flex-col gap-4">
            <div className="flex justify-between text-sm ">
              <p className=" text-gray-500">Subtotal</p>
              <p className="font-medium ">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm ">
              <p className=" text-gray500">Discount(10%)</p>
              <p className="font-medium ">$ 10</p>
            </div>
            <div className="flex justify-between text-sm ">
              <p className=" text-gray500">Shipping </p>
              <p className="font-medium ">$ 10</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between  ">
              <p className=" text-gray-800">Total</p>
              <p className="font-medium ">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {actionStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full bg-gray-800 text-white hover:bg-gray-900 transition-all duration-300 p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
