import CategoriesContainer from '../../components/categories-container';

const Home = () => {
	const categories = [
		{
			id: 1,
			title: 'Bolsas',
			imageURL:
				'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=457&q=80',
		},
		{
			id: 2,
			title: 'Sapatos',
			imageURL:
				'https://images.unsplash.com/photo-1621665421558-831f91fd0500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
		},
		{
			id: 3,
			title: 'Joias',
			imageURL:
				'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
		},
		{
			id: 4,
			title: 'Feminino',
			imageURL:
				'https://images.unsplash.com/photo-1485570661444-73b3f0ff9d2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80',
		},
		{
			id: 5,
			title: 'Masculino',
			imageURL:
				'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		},
	];
	return <CategoriesContainer categories={categories} />;
};

export default Home;
