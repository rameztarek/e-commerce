"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

function Filter() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathName = usePathname()

  const handleFilter = (value: string | null) => {
    const params = new URLSearchParams(searchParams)
    params.set("category", value || "all")
    router.push(`${pathName}?${params.toString()}`{scroll:false})
  }

  return <div className="flex justify-end items-center gap-2 text-sm text-gray-500">
    <span >Sort: By</span>
    <select name="sort" id="sort" className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm ">
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="asc">Price: Low To Hight</option>
      <option value="desc">Price: Hight To Low</option>
    </select>
  </div>

}

export default Filter
