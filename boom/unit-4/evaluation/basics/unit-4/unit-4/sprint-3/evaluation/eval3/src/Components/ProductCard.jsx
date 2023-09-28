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
            <Link to={`/products/${id}`}>
            <td data-testid="brand">{brand}</td>
            </Link>
            
            <td data-testid="category">{category}
            </td>
            <td data-testid="price">{price}
            </td>
            </tr>
    )
}
