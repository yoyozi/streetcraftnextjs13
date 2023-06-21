import crafters from '../../../data/data.json'
import CategoryPage from './categ'


// Dynamically generate metadata from params in url segment
export function generateMetadata({ params: { category } })  {
  return {
    title: 'Crafters - ' + category,
    description: 'The crafter categories'
  }
}



export default function Page({ params: { category }}) {  
  
  return <CategoryPage crafters={crafters} ctgry={category} />
}
