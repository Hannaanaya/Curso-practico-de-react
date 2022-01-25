import React from 'react';
import ProductInfo from '../components/ProductInfo';
import close from '@icons/icon_close.png';
import '../styles/ProductDetail.scss';

const ProductDetail = ({ product, setToggleProduct, handleClick }) => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close" onClick={() => setToggleProduct(false)}>
				<img src={close} alt="close" />
			</div>
			<ProductInfo
				product={product}
				setToggleProduct={setToggleProduct}
				handleClick={handleClick}
			/>
		</aside>
	);
}

export default ProductDetail;