import { UserLayout } from "../components/UserLayout";
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getProduct } from "../api/products"
import Item from "../components/ItemDetail";
import ItemDetail from "../components/ItemDetail";


export const Detail = () => {
    const { productId } = useParams();

    useEffect(() => {
        getProduct(productId).then((data) => console.log(data));
    }, [productId]);
    
    return <UserLayout> <ItemDetail /> </UserLayout>
};
