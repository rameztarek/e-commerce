import { Input } from '@base-ui/react'
import { Search } from 'lucide'
import React from 'react'

const SearchBar = () => {
  return (
    <div className=''>
      <Search />
      <Input id='search' placeholder='shear'/>
    </div>
  )
}

export default SearchBar
