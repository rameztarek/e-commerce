"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

function Filter() {
  const searchParams = useSearchParams
  const routers = useRouter() 
  const pathName = usePathname()

  return <div className="">
      <span>Sort: By</span>
      <select name="sort" id="sort"></select>
    </div>
  
}

export default Filter
