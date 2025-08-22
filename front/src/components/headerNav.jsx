import Logo from '../assets/react.svg'
import iconMenu from '../assets/icon_menu.svg'
import cruz from '../assets/cruz.png'
import { useState } from 'react';
import { useEffect } from 'react';

export function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle scroll event
  // and change the navbar style based on scroll position
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) { // Si el scroll es mayor a 50px
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup the event listener on component unmount
    // to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);
  // Define the class for the navbar element
  const navBarClass = `fixed z-50 w-full flex justify-between items-center p-4  text-black ${scrolled ? 'text-white bg-gray-800' : 'bg-transparent'} transition-colors duration-300`;
  
  return (
    <nav className={navBarClass}>
      <div className='ml-1'>
        <img className="size-12" src= {Logo} alt="Logo de la empresa" />
      </div>
      
      <div onClick={toggleMenu} className='flex  sm:hidden'>
        <img className='size-12' src={iconMenu} alt="icono_menu" />
      </div>

      {menuOpen && (

        //este es mi componente de menudesplegable
        <div className='absolute top-16 right-0 bg-white text-black p-4 rounded shadow-lg w-[20rem] h-lvh sm:hidden'>
            
            <h2 className='text-3xl'>Menu</h2>
            
            <div className='absolute top-2 right-2 cursor-pointer' onClick={toggleMenu}>
              <img className='size-3.5' src={cruz} alt="" />
            </div>
      

          <ul className='flex flex-col gap-4'>
            <li className='text-xl'><a href="#">inicio</a></li>
            <li className='text-xl'><a href="#">nosotros</a></li>
            <li className='text-xl'><a href="#">marcas</a></li>
            <li className='text-xl'><a href="#">contactos</a></li>
          </ul>
        </div>
      )}

      <div className='hidden sm:flex sm:right-11'>
        <ul className='flex sm:gap-10 md:gap-20 lg:gap-24'>
          <li className='text-xl'><a href="#">inicio</a></li>
          <li className='text-xl'><a href="#">nosotros</a></li>
          <li className='text-xl'><a href="#">marcas</a></li>
          <li className='text-xl' ><a href="#">contactos</a></li>
        </ul>
      </div>
    </nav>
  )
}