import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProductos from '../hooks/useGetProducts';

const ProductList = () => {
	const API = 'http://api.escuelajs.co/api/v1/products';

	const products = useGetProductos(API);
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product = {product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;