import React, { useState } from "react";

const ItemListContainer = (props) => {
    // Desestructuración
    const {data, handlerUpdateCount} = props;
    const {title, url, description, price} = data; // Renderizo propiedades
    const [stock, setStock] = useState(25);

    const handlerActionAdd = () => {
        if(stock > 0) {
            setStock(stock-1);
            handlerUpdateCount(); 
        }else{
            //Agregar alerta de alguna libreria como SweetAlert
            alert("Nos quedamos sin Stokc.");
        }
    };

    return (

        <div className="card mt-3">
            <div className="card-body">
                <p> {title} </p>
                <p> {description} </p>
                <img width={400} height={300} src={url} alt="Imagen del producto" />
                <p> ${price} </p>
                <p> {stock} </p>
                <button className="btn btn-dark" onClick={handlerActionAdd}>
                    Agregar 
                </button>
            </div>
        </div>
    )
}

//"https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

export default ItemListContainer;