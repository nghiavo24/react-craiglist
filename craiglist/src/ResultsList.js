import React from 'react'


const ResultsList = (props) => {
 
    return(
        <div className='cards'>
            <img className="item-picture" src="{props.picture}"/>{props.picture}
            <div className="item-name">{props.name}</div>
            <div className="item-price">${props.price}</div>
        </div>
    )
}

export default ResultsList
