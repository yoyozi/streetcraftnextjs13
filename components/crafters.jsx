import Card from './card'
import AllImages from './all-images'
import crafters from './../data/data.json'

const List = ({ crafters }) => {

  return (
    <div className='mt-12 first-letter:grid'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center ">
        {crafters.map((crafter) => (
          <>
            <div key={crafter.id}>
              <Card crafter={crafter} />
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default List
