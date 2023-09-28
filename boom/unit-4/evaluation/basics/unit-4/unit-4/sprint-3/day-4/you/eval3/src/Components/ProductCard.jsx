import { Link } from "react-router-dom";

export default function RestaurantCard({
    brand,
    category,
    price,
    id
}){
    return (
        <tr data-testid="item" key={id}>
            <td>{id}</td>
            <td><Link data-testid="brand" to={`/products/${id}`}>{brand}</Link></td>
            <td data-testid="category">{category}</td>
            <td data-testid="price">{price}</td>
        </tr> 
    )
}
