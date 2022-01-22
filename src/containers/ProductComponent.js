import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const ProductCompenent = function() {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const {id, image, title, price,category} = product
        return (
            <div className="four column wide" key={id} style={{width: "350px", height: "550px"}}>
                <Link to={`/product/${id}`}>
            <div className="ui link cards">
                <div className="card">
                    <div className="image" style={{ objectFit: "cover"}}>
                        <img src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">${price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        )
    })
    return <React.Fragment>{renderList}</React.Fragment>
}

export default ProductCompenent;