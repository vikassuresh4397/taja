import { Link } from "react-router-dom";

export default function RestaurantCard({
    brand,
    category,
    price,
    id
}){
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <Link data-testid="brand" to={`/products/${id}`}>
            {/* <td > */}
                {brand}
            {/* </td> */}
            </Link>
            
            <td data-testid="category">{category}
            </td>
            <td data-testid="price">{price}
            </td>
            </tr>
    )
}
