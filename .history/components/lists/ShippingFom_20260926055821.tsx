import { useForm } from "react-hook-form";
import { ShippingFormInputs } from "../types";

const ShippingFom = () => {
  const {} = useForm<ShippingFormInputs>({
    resolver:zodRes
  });
  
  return <div className="">ShippingFom</div>;
};

export default ShippingFom;
