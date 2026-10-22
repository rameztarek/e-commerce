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
  const [productType, setProductType] = useState<{
    size: string;
    color?: string;
  }>({
    size: product.sizes[0],
    color: undefined,
  });

  const handleSize=(size:string) =>{
    setProductType((prev) => ({
      ...prev,
      size: size
    }));
  }

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
    });
    toast.success("Product Added To Cart");
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`products/${product.id}`}>
        <div className="relative aspect-2/3">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>

      <div className="flex flex-col p-4 gap-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-gray-500 text-sm">{product.shortDescription}</p>
        {/* SIZE */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option value={size} key={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <Button
            onClick={handleAddToCart}
            className="ring-1 ring-gray-500 rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
