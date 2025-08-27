import { Link } from "react-router-dom";


export function ItemNav ({to,text}){
    return(
        <li className="text-xl">
            <Link className="text-xl" to={to}>{text}</Link>
        </li>
    )
}