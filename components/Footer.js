import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Natural Health Care</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Digestives</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Health and Wellness</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Chyawanprash</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Badam Pak</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Ayurvedic Medicine</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Ghee</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Honey</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Health Drinks</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Fruit Beverage</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Natural Food Products</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Kwath</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Vati</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Bhasma</Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-800">Churna</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">E-mail</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
              </div>
              
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Ally'Maiya</span>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Ally'Maiya
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link href="#" className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>             
              <Link href="#" className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}