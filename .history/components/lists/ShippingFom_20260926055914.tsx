import { useForm } from "react-hook-form";
import { ShippingFormInputs } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

const ShippingFom = () => {
  const {} = useForm<ShippingFormInputs>({
    resolver:zodResolver(shippingFormSchema)
  });
  
  return <div className="">ShippingFom</div>;
};

export default ShippingFom;
