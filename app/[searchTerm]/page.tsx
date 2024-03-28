import getWikiResults from "@/lib/getWikiResults"
import Item from "./components/Item"
type Props = {params:{searchTerm:string}}

export async function generateMetadata({params:{searchTerm}}:Props)
{
    const wikiData : Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20',' ')
    if(!data?.query?.pages)
    {
        return{
            title:`${displayTerm} Not Found`,
           
        }
    }
    return {
        title:displayTerm,
        description:`Search results for ${displayTerm}`
    }

}

export default async function page({params:{searchTerm}}: Props) {
  const wikiData : Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
 const result: Result[] | undefined  = data?.query?.pages
console.log("The result is ",result,"these are the results")
    return (
  <main >
         {result ? Object.values(result).map(res => {return <Item result={res} key = {res.pageid}/>}):<p>{`${searchTerm} Not Found`}</p>}
  </main>
  
  )
}
