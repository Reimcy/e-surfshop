import brandQuicksilver from '../assets/brand-quicksilver.jpg';

export const BrandCard = () => {
  return (
   <div className="flex flex-col  bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
        {/*<div className="w-3/4 h-50 bg-cover" style={{ backgroundImage: `url(${brandQuicksilver})` }}/>*/}
        <img className="w-full h-40 object-cover rounded-lg mb-4" src={brandQuicksilver} alt="Marca Quicksilver" />
        <h3 className="text-xl font-semibold">otra marca</h3>
        <p className="text-gray-600 mt-2">Descripción breve de la marca.</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Ver Productos
        </button>
    </div>
  )
};  