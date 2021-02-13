import React from 'react';
import '../stylos/stylosCard.css'

const Card = (props) => {
    
    const {parame:
        {image,
        id,
        name,
        status,
        species
        } 
        } = props

    return ( <div className="container">
        
        <div className="card">

            <img src={image}></img>
            <h4>{id} - {name}</h4>
            <p>status:{status}</p>
            <p>species:{species}    </p>

        </div>
        
    </div> );
}
 
export default Card;