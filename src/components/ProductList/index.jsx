import React from "react";
import UseApi from "../../Api";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";

function ProductList() {
    const {data, isLoading, isError} = UseApi(
        'https://v2.api.noroff.dev/online-shop/',
    )

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Ups! An error occured.</div>;
      }

    return <div className="container"> 
        <SearchBar className="" products={data} />
      
        <div className="row">
          {data.map((product) => {
            const price = product.price;
            const discountedPrice = product.discountedPrice;
            const discountedPercent =price ? ((price-discountedPrice)/price)*100 : 0;
            return (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card h-100 d-flex justify-content-between">
                { product.image && product.image.url &&(
                <img className="card-img-top" src={product.image.url} alt={product.image.alt || "Product image"} /> )}
                <div>
                  <h2 className="card-title ps-3">{product.title}</h2>
                  <div className="d-flex flex-row ps-3 pe-3 justify-content-between">
                    <p className="card-text">{product.discountedPrice.toFixed(2)}</p>
                    <p className="card-text text-danger fw-bold">{discountedPercent > 0 && `${discountedPercent.toFixed(0)}% off`}</p>
                  </div>
                  <Link className="d-flex justify-content-center pb-3" to={`/product/${product.id}`}>
                    <div className="btn btn-primary">View product</div>
                  </Link>
                </div>
              </div>
            </div>
        )})}
        </div>
      </div>;
}

export default ProductList