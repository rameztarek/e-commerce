import { useForm } from "react-hook-form";
import { ShippingFormInputs, shippingFormSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

const ShippingFom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="border-b border-gray-200 py-2 text-sm"
          {...register("name")}
        />
        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
      </div>
            <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="John Doe"
          className="border-b border-gray-200 py-2 text-sm"
          {...register("email")}
        />
        {errors.name && <p className="text-xs text-red-500">{errors.email.message}</p>}
      </div>
            <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-500">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="border-b border-gray-200 py-2 text-sm"
          {...register("name")}
        />
        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
      </div>
            <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="border-b border-gray-200 py-2 text-sm"
          {...register("name")}
        />
        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
      </div>
            <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-gray-500">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="border-b border-gray-200 py-2 text-sm"
          {...register("name")}
        />
        {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
      </div>
    </form>
  );
};

export default ShippingFom;
