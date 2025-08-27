import { useEffect } from "react"
import { useState } from "react"
import { BrandCard } from "./brandCard"

export function BrandSection() {
    const [post, setPost] = useState([]);
    
    const getPosts = async () => {
        const response = await fetch("http://127.0.0.1:8000/?api=marcas");
        const data = await response.json();
        console.log(data);
        setPost(data);
    }
    
    useEffect(() => {
        getPosts();
    },[])
    
    const postCard = post.map((post) => {
       return (
            <li key={post.id}>
                <BrandCard post={post} />
            </li>
        )
    })

    return (
     <section>
            <div>
              <h2 className="text-3xl font-bold text-center my-8">Nuestras Marcas</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 px-4">
                {/**lo siguiente es el componente brandCard */}
                {postCard}
              </ul>
            </div>
          </section>
    )
    
}
