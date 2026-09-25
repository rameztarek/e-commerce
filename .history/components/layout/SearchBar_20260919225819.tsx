import { Input } from '@base-ui/react'
import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className=''>
      <Search className='w-4 h-4 text-gray-50' />
      <Input id='search' placeholder='Search... ' className={"text-sm outline-0"}/>
    </div>
  )
}

export default SearchBar
