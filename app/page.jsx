'use client';

import Crafters from '../components/crafters';
import crafters from '../data/data.json';

const HomePage = () => {

	return (
		<div className='pt-12'>

        <Crafters crafters={crafters} />
      
		</div>
	);
};

export default HomePage;
