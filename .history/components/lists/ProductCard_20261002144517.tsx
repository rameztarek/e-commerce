"use client";

import Link from "next/link";
import { ProductType } from "../types";
import Image from "next/image";
import { Button } from "@base-ui/react";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import useCartStore from "@/store/cartStore";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductType((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productType.size,
      selectedColor: productType.color,
    });
    toast.success("Product Added To Cart");
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden ">
      <h1>{product.name}</h1>
  
  </div>
  );
};

export default ProductCard;
