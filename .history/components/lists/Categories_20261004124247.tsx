"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/app/lib/categories";

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const selected = searchParams.get("category") || "all";

  const handleChange = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", slug);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 bg-gray-100 p-2 rounded-lg mb-4 text-sm">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => handleChange(cat.slug)}
          className={`flex items-center justify-center gap-2 cursor-pointer px-2 py-1 rounded-md ${
            selected === cat.slug ? "bg-white" : "text-gray-500"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;