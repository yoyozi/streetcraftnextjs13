import { Poppins } from 'next/font/google';
import './globals.css';
//import { Inter } from 'next/font/google';
import Header from '../components/header';
import Footer from '../components/footer';

const poppins = Poppins({
	weight: ['400', '700'],
	subsets: ['latin'],
});

// const inter = Inter({
// 	subsets: ['latin'],
// });

export const metadata = {
	title: 'Streetcraft',
	description: 'People crafting goods and selling in the street',
	keywords:
		'Beadwork, fabric work, paintings, leather repairs, barber, outside and on pavements, street vendors',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={poppins.className}> 
        <div className='flex flex-col h-auto'>
          <Header />
            <main>{children}</main>
          <Footer />
        </div>
			</body>
		</html>
	);
}
