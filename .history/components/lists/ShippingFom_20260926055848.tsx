import { useForm } from "react-hook-form";
import { ShippingFormInputs } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";

const ShippingFom = () => {
  const {} = useForm<ShippingFormInputs>({
    resolver:zodResolver
  });
  
  return <div className="">ShippingFom</div>;
};

export default ShippingFom;
