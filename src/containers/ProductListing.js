import React, {useEffect} from "react"
import axios from "axios"
import ProductComponent from "./ProductComponent"
import { setProducts } from '../redux/actions/productActions'
import { useDispatch } from "react-redux"

const ProductListing = function() {
    const dispatch = useDispatch();

    const fetchProducts = async function() {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Err", err)
        })

        dispatch(setProducts(response.data))
    }

    useEffect (() => {
        fetchProducts()
    }, [])
    return (
        <div className="ui grid container" style={{marginTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "center"}}> 
            <ProductComponent />
        </div>
    )
}

export default ProductListing; 