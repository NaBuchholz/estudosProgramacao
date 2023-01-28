import React from 'react';
import CartegoryItem from '../category-item';
import './style.scss';

const CategoriesContainer = ({ categories }) => {
	return (
		<div className="categories-container">
			{categories.map((category) => (
				<CartegoryItem
					key={category.id}
					imageURL={category.imageURL}
					title={category.title}
				/>
			))}
		</div>
	);
};

export default CategoriesContainer;
