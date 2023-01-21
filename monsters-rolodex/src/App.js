import { Component } from 'react';
import './App.css';

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
				this.setState(
					() => {
						return { monsters: users };
					},
					() => {
						console.log(this.state);
					}
				)
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
				{filtredMonsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
