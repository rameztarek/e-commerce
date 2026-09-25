"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

function Filter() {
  const searchParams = useSearchParams
  const routers = useRouter() 
  const pathName = usePathname()

  return <div className="flex justify-end items-center gap-2 text-sm text-gray-500">
      <span className="">Sort: By</span>
      <select name="sort" id="sort">
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low To Hight</option>
        <option value="desc">Price: Hight To Low</option>
      </select>
    </div>
  
}

export default Filter
