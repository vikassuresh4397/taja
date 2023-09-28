import React from 'react';

const Card=({data=[]})=>{
    return (
        <div data-testid="data-list">
            {data.map((item)=>{
                return(
                    <div data-testid="superhero-list">
                        <p>Name: {item.name}</p>
                        <p>Height: {item.height}</p>
                        <p>Weight: {item.weight}</p>
                        <p>Power Level: {item.power}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;