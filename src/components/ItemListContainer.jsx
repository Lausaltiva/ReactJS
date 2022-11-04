import { useEffect, useState } from 'react';
import React from 'react';
import Item from './Item';
import { getProducts } from '../api/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      getProducts(categoryId)
        .then((items) => setProductos(items))
        .catch((e) => console.log(e));
    }, [categoryId]);

  return (
    <div className='products'>
      {productos.map((producto) => {
        return (
          <Item
          key={producto.id}
          id={producto.id}
          imagen={producto.imagen}
          nombre={producto.nombre}
          precio={producto.precio}
          categoria={producto.categoria}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;