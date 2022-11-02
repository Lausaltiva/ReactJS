
const Item = (props) => {

    return (
        <div className="card">
            <img className="card__image" src={props.imagen} alt="ropa"/>
            <span className="card__name">{props.nombre}</span>
            <span className="card__price">{props.precio}</span>
        </div>
    )
}

export default Item