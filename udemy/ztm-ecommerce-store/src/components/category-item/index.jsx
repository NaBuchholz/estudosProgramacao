import './style.scss';
import React from 'react';

const CartegoryItem = ({ imageURL, title }) => {
	return (
		<div className="category-container">
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageURL})` }}></div>
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Comprar Agora</p>
			</div>
		</div>
	);
};

export default CartegoryItem;
