import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentFormInputs, paymentFormSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const PaymentMethod = ({
  setShippingForm,
}: {
  setShippingForm: (data: PaymentFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(paymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {

  };

  return (
    <form
      onSubmit={handleSubmit(handlePaymentForm)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="cardHolder" className="text-xs text-gray-500">
          cardHolder
        </label>
        <input
          type="text"
          id="cardHolder"
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
          cardNumber
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder="JohnDoe@gmail.com"
          className="border-b border-gray-200 p-2 text-sm"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-500">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="expirationDate" className="text-xs text-gray-500">
          expirationDate
        </label>
        <input
          type="text"
          id="expirationDate"
          placeholder="expirationDate Number"
          className="border-b border-gray-200 p-2 text-sm"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-500">{errors.expirationDate.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500">
          cvv
        </label>
        <input
          type="text"
          id="cvv"
          placeholder="Your cvv"
          className="border-b border-gray-200 p-2 text-sm"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-xs text-red-500">{errors.cvv.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gray-800 text-white hover:bg-gray-900 transition-all duration-300 p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  );
};

export default PaymentMethod