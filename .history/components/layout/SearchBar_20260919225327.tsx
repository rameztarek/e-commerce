import { Input } from '@base-ui/react'
import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className=''>
      <Search />
      <Input id='search' placeholder='Search... ' className={"text-sm "}/>
    </div>
  )
}

export default SearchBar
