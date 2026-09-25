import { Input } from '@base-ui/react'
import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className=''>
      <Search />
      <Input id='search' placeholder='Search... ' className={"text-sm outline-0"}/>
    </div>
  )
}

export default SearchBar
