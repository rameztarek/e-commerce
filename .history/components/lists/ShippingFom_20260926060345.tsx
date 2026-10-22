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

  return <form className="flex flex-col gap-4">
    <div className="flex flex-col gap-1">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Ramez Tarek" {...register('name')} />
    </div>
  </form>;
};

export default ShippingFom;
