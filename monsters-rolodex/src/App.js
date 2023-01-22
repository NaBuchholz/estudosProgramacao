import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) =>
				this.setState(() => {
					return { monsters: users };
				})
			);
	}
	onSearchChange = (event) => {
		const searchField = event.target.value.toLowerCase();
		this.setState(() => {
			return { searchField };
		});
	};
	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;
		const filtredMonsters = monsters.filter((el) => {
			return el.name.toLowerCase().includes(searchField);
		});
		return (
			<div className="App">
				<input
					type="search"
					className="search-box"
					placeholder="Procurar monstros"
					onChange={onSearchChange}
				/>
				<CardList monsters={filtredMonsters} />
			</div>
		);
	}
}

export default App;
