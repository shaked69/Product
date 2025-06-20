import React, { ReactElement } from "react";


interface Props{
    name : string
    price : number
    imageURL : string
}

const ProductCard = ({name, price, imageURL} : Props) : ReactElement => {
    return <div>
        <h2>{name}</h2>
        <img src={imageURL}></img>
        <h2>{price}</h2>
    </div>
}

export default ProductCard;