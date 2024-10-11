import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar({ products }) {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center my-3">
      <div className="search-bar w-50">
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search for products..."
          className="form-control"
        />
        
        {search && filteredProducts.length > 0 && (
          <ul className='list-unstyled mt-2'>
            {filteredProducts.map((product) => (
              <li key={product.id} className='p-1'>
                <Link className='text-decoration-none text-reset fw-bold' to={`/product/${product.id}`}>
                  {product.title} - ${product.price}
                </Link>
              </li>
            ))}
          </ul>
        )}
        
        {filteredProducts.length === 0 && search.length > 0 && (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
