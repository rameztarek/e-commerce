import { useForm } from "react-hook-form";
import { ShippingFormInputs, shippingFormSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";

const ShippingFom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

handleShippingForm () =>{
  
}

  return (
    <form onSubmit={handleSubmit(handleShippingForm)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="border-b border-gray-200 p-2 text-sm"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="JohnDoe@gmail.com"
          className="border-b border-gray-200 p-2 text-sm"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-gray-500">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          placeholder="Phone Number"
          className="border-b border-gray-200 p-2 text-sm"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-gray-500">
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="Your Address"
          className="border-b border-gray-200 p-2 text-sm"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="text-xs text-gray-500">
          city
        </label>
        <input
          type="text"
          id="city"
          placeholder="Your City"
          className="border-b border-gray-200 p-2 text-sm"
          {...register("city")}
        />
        {errors.city && (
          <p className="text-xs text-red-500">{errors.city.message}</p>
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

export default ShippingFom;
