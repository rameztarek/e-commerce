/*
 * This is a Server Component: App Router components are server-side by default,
 * and async components can await data before returning their rendered UI. Keep
 * "use client" off this file. A Client Component itself cannot be async because
 * React expects it to return UI synchronously; put interactivity in a separate
 * Client Component, as ProductCard already does.
 *
 * `await fetch(...)` first waits for the HTTP response (status, headers, and a
 * body stream). `await response.json()` is a second step: it reads that stream
 * and parses its JSON text into JavaScript data, so fetch does not return JSON
 * directly.
 *
 * Next.js extends server fetch with persistent caching options. `revalidate: 3600`
 * allows this response to be reused for up to an hour, then refreshed when
 * needed. Without an explicit option, Next.js 16's default behavior does not
 * give this request a persistent cache lifetime; rendering mode determines
 * whether it runs for a request or during static prerendering.
 *
 * The API response has its own shape, so it is typed separately from our
 * ProductType and mapped into the app's model. Keeping that boundary means the
 * rest of the app does not depend on DummyJSON fields or missing variant data.
 * In `data.products.map((p) => ({ ... }))`, map calls the arrow function once
 * for each array item: `p` is that item's DummyProduct, and the returned object
 * is the ProductType that goes into the new array.
 */

import type { ProductType } from "../types";
import ProductCard from "./ProductCard";

interface DummyProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
}

interface DummyProductsResponse {
  products: DummyProduct[];
  total: number;
  skip: number;
  limit: number;
}

const TshirtProductList = async () => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/mens-shirts",
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      return <p>Could not load products</p>;
    }

    const data = (await response.json()) as DummyProductsResponse;
    const products: ProductType[] = data.products.map((p) => ({
      id: p.id,
      name: p.title,
      shortDescription: p.description,
      description: p.description,
      price: p.price,
      sizes: ["s", "m", "l", "xl"],
      colors: ["default"],
      images: { default: p.thumbnail },
    }));

    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } catch {
    return <p>Could not load products</p>;
  }
};

export default TshirtProductList;