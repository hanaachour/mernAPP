import React from 'react'
import { Link } from 'react-router-dom';
import './Product.css';
 const Product = () => {
  return (
    <div className="product">
    <img src="https://www.medispace.tn/image/cache/data/hygiene-intime/11839-svr-topialyse-gel-lavant-1l-500x500.jpg"
     alt="SVR TOPIALYSE GEL LAVANT FLACON POMPE 1L" />

    <div className="product__info">
      <p className="info__name">Product1</p>

      <p className="info__description">SVR Topialyse Crème Soin nourrissant anti-dessèchement Anti-irritation & anti-grattage Bébé (hors prématuré)</p>

      <p className="info__price">$500.99</p>

      <Link to={`/product/productScreen`} className="info__button">
        View
      </Link>
    </div>
  </div>
  )
}
export default Product;