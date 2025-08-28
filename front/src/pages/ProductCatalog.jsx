import { HeaderNav } from "../components/headerNav"
import  {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { ProductCard } from "../components/ProductCard"


 
export function ProductCatalog() {
    const [products, setProducts] = useState([]);

    const { postId } = useParams(); 

    const getPosts = async (postId) => {
        const response = await fetch(`http://127.0.0.1:8000/?api=productos&marca_id=${postId}`);
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }
    useEffect(() => {
        getPosts(postId);
    }, []);
        
    const productCard = products.map((product) => {
         return (
                <li key={product.id}>
                 <ProductCard product={product} />
                </li>
            )
    })
    
    return (
       
       <>
            <HeaderNav/>
            <section className="bg-gray-100 min-h-screen pt-28">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Catálogo de Productos</h2>
                    <ul className="flex flex-wrap justify-center">
                        {productCard}
                    </ul>
                </div>
            </section>        
        </>
    )
}