import React from 'react'

export default async function getWikiResults(searchTerm:string) {
 const searchParams = new URLSearchParams({
    action:'query',
    generator:'search',
    gsrsearch:searchTerm,
    gsrlimit:'20',
    prop:'pageimages|extracts',
    exchars:'500',
    exintro:'true',
    explantion:'true',
    exlimit:'max',
    format:'json',
    origin:'*'
 })
 const response = await fetch("https://en.wikipedia.org/w/api.php?"+searchParams)

    return await response.json()
}
