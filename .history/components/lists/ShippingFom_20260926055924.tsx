import { useForm } from "react-hook-form";
import { ShippingFormInputs , shippingFormSchema } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

const ShippingFom = () => {
  const {re} = useForm<ShippingFormInputs>({
    resolver:zodResolver(shippingFormSchema)
  });
  
  return <div className="">ShippingFom</div>;
};

export default ShippingFom;
