import banner from '../assets/imagen-surf-medrec.jpg'
import { BrandSection } from './BrandSection';
import { InfoBrand } from './InfoBrand';
export function MainSection() {
  return (
    <main>
      <section className="w-full h-[32rem] bg-gray-100 flex relative">
          <div className='w-full h-full bg-cover bg-center absolute' style={{ backgroundImage: `url(${banner})` }}>
          </div>
          
          <div className=" absolute top-1/6 left-2 sm:left-3/5 sm:top-1/6 md:top-1/4 right-1.5 sm:right-2 md:right-4 lg:right-7 xl:right-1/12 text-center border-2 border-white  bg-linear-to-bl p-6 rounded-lg shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold mb-4">Bienvenido a E-SurfShop</h1>
            <p className="text-lg mb-8">Tu tienda online de surf y deportes acuáticos</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
              Explorar Productos
            </button>
          </div>
      </section>

      <BrandSection />
      <InfoBrand />
    </main>
  );
}