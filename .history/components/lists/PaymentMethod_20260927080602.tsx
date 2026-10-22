"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentFormInputs, paymentFormSchema } from "../types";

const PaymentMethod = () => {
  const [validated, setValidated] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = () => {
    setValidated(true);
  };

  return (
    <form
      onSubmit={handleSubmit(handlePaymentForm)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="cardHolder" className="text-xs text-gray-500">
          Name on card
        </label>
        <input
          id="cardHolder"
          type="text"
          autoComplete="cc-name"
          placeholder="John Doe"
          className="border-b border-gray-200 p-2 text-sm"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-500">{errors.cardHolder.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cardNumber" className="text-xs text-gray-500">
          Card number
        </label>
        <input
          id="cardNumber"
          type="text"
          inputMode="numeric"
          autoComplete="cc-number"
          maxLength={16}
          placeholder="1234567890123456"
          className="border-b border-gray-200 p-2 text-sm"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="expirationDate" className="text-xs text-gray-500">
            Expiration date
          </label>
          <input
            id="expirationDate"
            type="text"
            autoComplete="cc-exp"
            placeholder="MM/YY"
            className="border-b border-gray-200 p-2 text-sm"
            {...register("expirationDate")}
          />
          {errors.expirationDate && (
            <p className="text-xs text-red-500">
              {errors.expirationDate.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="cvv" className="text-xs text-gray-500">
            Security code
          </label>
          <input
            id="cvv"
            type="password"
            inputMode="numeric"
            autoComplete="cc-csc"
            maxLength={3}
            placeholder="CVV"
            className="border-b border-gray-200 p-2 text-sm"
            {...register("cvv")}
          />
          {errors.cvv && (
            <p className="text-xs text-red-500">{errors.cvv.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-800 p-2 text-white transition-all duration-300 hover:bg-gray-900"
      >
        <div className="flex flex-row gap-2">
          <Image src="/p" alt="payment"/>
        </div>
        Validate payment details
        <ArrowRight className="h-3 w-3" />
      </button>
      {validated && (
        <p role="status" className="text-sm text-green-700">
          Payment details are valid. Payment processing is not connected yet.
        </p>
      )}
    </form>
  );
};

export default PaymentMethod;
