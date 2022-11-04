import { useParams } from "react-router-dom";
import { getProduct } from "../api/products"
import { useEffect, useState } from "react"
const ItemDetail = (props) => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProduct(productId).then((data) => setProduct(data));
    }, [productId]);

    return (
        <div className="card">
            <img className="card__image" src={product?.imagen} alt="ropa"/>
            <span className="card__name">{product?.nombre}</span>
            <span className="card__price">{product?.precio}</span>
        </div>
    )
};

export default ItemDetail 