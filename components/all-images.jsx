import Image from "next/image"

const AllImages = async (props) => {

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { allImages, slugName } = props
    return <>
      <div>
        {allImages.map((pic, index) => (
          <div key={index} className="flex flex-col place-items-center my-3 max-width">
            <Image
              src={`/images/craftersLightBox/${slugName}/${pic}`}
              width={1200}
              height={900}
              alt={pic}
              style={{
                maxWidth: "90%",
                height: "auto",
              }} 
              className='object-fill my-2 rounded-md'
            />
          </div>
          ))}
      </div>
    </>;
}

export default AllImages