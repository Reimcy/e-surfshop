
export const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden m-4 w-72 h-96 flex flex-col justify-around">
      {/* Contenedor de la imagen */}
      <div className="w-full mb-0.5 h-48 overflow-hidden">
        <img 
          className="w-full h-60 scale-y-60 scale-x-60 object-cover transition-transform duration-300 hover:scale-105" 
          src={product.imagen_url} 
          alt={product.nombre} 
        />
      </div>

      {/* Contenido del texto de la tarjeta */}
      <div className="p-4 flex flex-col justify-between h-40">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {product.nombre}
          </h3>
          <p className="text-sm font-medium text-gray-500 mb-2">
            {product.descripcion}
          </p>
        </div>
      </div>
      
      <div className="p-2 flex flex-col justify-between h-20">
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-blue-600">
            ${product.precio}
          </span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors duration-300 shadow-md">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};
