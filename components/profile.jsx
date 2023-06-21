'use client'

import Link from 'next/link';
import Image from "next/image";

const Card = (props) => {

  const crafter = props.crafter;
	const exploreLink = `/crafters/${crafter.slug}`;
  // <div className='max-w-sm rounded overflow-hidden shadow-lg m-3'>
  // className="mx-auto rounded-t-lg width-full m-3"

	return (
    <div>
      <Link href={exploreLink}>
        <div className='max-w-sm rounded-full overflow-hidden border-2 m-6 border-slate-400 shadow-lg'>
          <Image
            className="object-fill"
            src={`/images/profile/${crafter.profilePic}`}
            alt={crafter.title}
            width={250}
            height={250}
            slyles={{
              height: "auto",
              width: "auto"

            }}
          />
        </div>
        <div className='flex flex-col justify-center m-4'>
              <div className='text-2xl text-primary mx-auto font-bold'>{crafter.title}</div>
              <address className='mx-auto'>{crafter.location}</address>
              <div className='mb-2 mx-auto'>{crafter.mobile}</div>
        </div>
      </Link>
    </div>
    );
};

export default Card;
