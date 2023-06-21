'use client'

import Link from 'next/link'
import { useState, useEffect } from "react"
import Profile from "@/components/profile"
import { usePathname } from 'next/navigation'

export default function CategoryPage(props) {

  const [selected, setSelected] = useState(false)
  const [showCrafters, setShowCrafters] = useState([])

  const { crafters, ctgry } = props
  const pathname = usePathname()
  //console.log(pathname)

  let cats = []
  crafters.map(craft => (
    cats.push(craft.category)
  ))
  
  let categs = cats.filter((element, index) => {
    return cats.indexOf(element) === index;
  });
  
  useEffect(() => {
    if (ctgry === 'select_one') {
      return
    }
    
    const objArray = crafters.filter((crf) => {
      return crf.category === ctgry;
    });
    //console.log(objArray)
    
    setSelected(true);
    setShowCrafters(...[objArray])

  },[])

  //console.log(showCrafters)

  return (
    <>
      <div className='mt-24'>
        <ul className='flex flex-row flex-wrap place-content-evenly'>
          {categs.map((cat, index)  => (
            <Link 
              key={index}  
              href={`/crafts/${cat}`} 
              className={pathname ===`/crafts/${cat}` ? 
              'm-2 bg-red-500 text-white rounded-lg p-4' :
              'm-2 bg-slate-600 text-white rounded-lg p-4'}
            >
              <li >
                {cat}
              </li>
            </Link>
          ))} 
        </ul>
        {!selected && <p className="flex place-content-center text-2xl my-12">Select a category to view crafters...</p>}
        {(showCrafters.length > 1) &&
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center ">
              {showCrafters.map(craft => (
                <div>
                  <Profile crafter={craft} />
                </div>
              ))}
            </div>
          </> 
        }
        {(showCrafters.length === 1) &&
          <>
            <div className="grid grid-cols-1 place-items-center ">
              {showCrafters.map(craft => (
                <div>
                  <Profile crafter={craft} />
                </div>
              ))}
            </div>
          </> 
        }
      </div>
    </>
  )
}
