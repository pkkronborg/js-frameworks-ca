import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../state/cart/"
import UseApi from "../../Api";


function ProductDetails() {
    let { id } = useParams();
    const {data, isLoading, isError} = UseApi(
        `https://v2.api.noroff.dev/online-shop/${id}`,
    )
    const { addToCart } = useCart();
    
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error</div>;
      }
    const price = data.price;
    const discountedPrice = data.discountedPrice;
    const discountedPercent =price ? ((price-discountedPrice)/price)*100 : 0;
    const reviews = data.reviews && data.reviews.length > 0 ? data.reviews : [];
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            {data.image && data.image.url && (
            <img className="img-fluid" src={data.image.url} alt={data.image.alt || "Product image"}></img>)}
          </div>
          <div className="col-md-6">
            <div>
              <h1>{data.title}</h1>
              <p className="text-danger">{discountedPercent > 0 && `-${discountedPercent.toFixed(0)}%`}</p>
            </div>
            <p>{data.descrption}</p>
            <p>{data.discountedPrice}</p>
            <button className="btn btn-primary" onClick={() => addToCart(data)}>Add to cart</button>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-center">Reviews</h2>
          <div className="d-flex justify-content-center">
            <div className="col-md-8">
              {reviews.length === 0 ? (
              <p>No reviews yet.</p>
              ) : (
                reviews.map((review) => (
                    <div key={review.id} className="border-bottom pb-3 mb-3">
                      <h3>{review.username}</h3>
                      <p>Rating: {review.rating}</p>
                      <p>Description: {review.description}</p>
                    </div>
                ))
              )} 
            </div> 
          </div>    
        </div>
      </div>
        );
}

export default ProductDetails


/* There should also be reviews listed for the product, if there are any. */