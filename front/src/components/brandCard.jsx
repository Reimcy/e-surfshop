import { Link } from "react-router-dom";

export const BrandCard = (props) => {
  const { post } = props;
  return (
   <div className="flex flex-col justify-between h-11/12 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
        {/*<div className="w-3/4 h-50 bg-cover" style={{ backgroundImage: `url(${brandQuicksilver})` }}/>*/}
        <img className="w-full h-40 object-cover rounded-lg mb-4" src={post.logo_url} alt="Marca Quicksilver" />
        <h3 className="text-xl font-semibold">{post.nombre}</h3>
        <p className="text-gray-600 mt-2">{post.descripcion}Descripción breve de la marca.</p>
        <div className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <Link to={`/products/${post.id}`}>Ver Productos</Link>
        </div>
    </div>
  )
};   