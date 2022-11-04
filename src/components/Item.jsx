import { useNavigate } from "react-router-dom"
const Item = (props) => {
    const navigate = useNavigate()
    return (
        <div className="card" onClick={() => navigate(`/product/${props.id}`)}>
            <img className="card__image" src={props.imagen} alt="ropa"/>
            <span className="card__name">{props.nombre}</span>
            <span className="card__price">{props.precio}</span>
        </div>
    )
}

export default Item