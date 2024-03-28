'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
export default function Search() {

    const [search,setSearch] = useState("");
    const router = useRouter()
    const handleSubmit = async(e:  FormEvent<HTMLFormElement>
        )=>{
        e.preventDefault();
        setSearch('')
        router.push(`/${search}/`)
    }
  return (
   <form onSubmit={handleSubmit}>
<input 
type = "text"
value = {search} 
onChange={(e)=>setSearch(e.target.value)}
>
</input>
<button type = "submit" >Search</button>
   </form>
  )
}
