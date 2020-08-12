import React from 'react';

const Card = (props) => {
    console.log(props.tittle);
    console.log(props.score);
    console.log(props.address);
    return (
        <div>
            <img src= {props.image} />
            <h1>{props.title}</h1>
            <h4>valoracion: {props.score} estrellas</h4>
            <p>direccion: {props.address}</p>
            {props.superhost ? <small>SuperHost</small> : null}
        </div>
    )
}

export default Card;
