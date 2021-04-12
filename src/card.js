import React from 'react'
import './css/card.css';
function Card(props) {
    console.log(props);
    return (
        <div id="content-all-card">
            <div id="imagen"><img src={props.imagen} alt="" srcset=""/></div>
            <div id="body-card">
                <h2 id="marca">Marca:{props.marc}</h2>
                <h3 id="precio">Precio:{props.cash}</h3>
                <button id="btn">Comprar</button>
            </div>
        </div>
    )
}

export default Card
