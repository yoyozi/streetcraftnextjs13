'use client'

import Link from 'next/link';
import Image from "next/image";

const Card = (props) => {

  const crafter = props.crafter;
	const exploreLink = `/crafters/${crafter.slug}`;
  // <div className='max-w-sm rounded overflow-hidden shadow-lg m-3'>
  // className="mx-auto rounded-t-lg width-full m-3"

	return (

      <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 max-w-sm rounded overflow-hidden border-2 m-6 border-slate-400 shadow-lg'>
        <Link href={exploreLink}>
          <Image
            className="width-full"
            src={`/images/landing/${crafter.landingPic}`}
            alt={crafter.title}
            width={250}
            height={150}
            slyles={{
              height: "auto",
              width: "auto"

            }}
          />
          <div className='flex flex-col justify-center m-4'>
            <div className='text-2xl text-primary mx-auto font-bold'>{crafter.title}</div>
            <div className='mx-auto text-sm font-bold'>{crafter.category}</div>
            <address className='mx-auto'>{crafter.location}</address>
            <div className='mb-2 mx-auto'>{crafter.mobile}</div>
          </div >
        </Link>
      </div>
    );
};

export default Card;
