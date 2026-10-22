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

  return <form className="">ShippingFom</form>;
};

export default ShippingFom;
