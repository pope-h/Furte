/**
 * Renders the layout of the application.
 * 
 * @returns {JSX.Element} The rendered layout component.
 */
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../sections/Footer'

const Layout = () => {
  return (
    <main className='relative flex flex-col bg-neutral-100'>
        <Nav />
        <div className='flex-1'><Outlet /></div>
        <section className="bg-black padding-x padding-t pb-12">
          <Footer />
        </section>
    </main>
  )
}

export default Layout