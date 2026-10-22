import { useForm } from "react-hook-form";
import { ShippingFormInputs } from "../types";

const ShippingFom = () => {
  const {} = useForm<ShippingFormInputs>({
    resolver:zod
  });
  
  return <div className="">ShippingFom</div>;
};

export default ShippingFom;
