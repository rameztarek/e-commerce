"use client";

import Image from "next/image";
import Link from "next/link";
import { ProductType } from "../types";

const ProductCard = ({ product }: { product: ProductType }) => {
  const imageSrc =
    typeof product.images === "string"
      ? product.images
      : (product.images?.default ??
        product.images?.[0] ??
        "/images/placeholder.png");

  return (
    <div className="flex flex-col gap-3">
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-2/3 overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={imageSrc}
            alt={product.title || "Product image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover"
          />
        </div>
      </Link>

      <div className="px-1">
        <h3 className="text-lg font-medium">{product.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
