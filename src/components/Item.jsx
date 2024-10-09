

import React from 'react';

function Item({ product }) {
    return (
        <div className="card" style={{ width: '18rem', margin: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
            <img src={product.img || './assets/default-image.png'} alt={product.name} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-price">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Item;
