import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
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
	render() {
		return (
			<div className="App">
				<input
					type="search"
					className="search-box"
					placeholder="Procurar monstros"
					onChange={(event) => {
						const searchString = event.target.value.toLowerCase();
						const filtredMonsters = this.state.monsters.filter((el) => {
							return el.name.toLowerCase().includes(searchString);
						});
						this.setState(() => {
							return { monsters: filtredMonsters };
						});
					}}
				/>
				{this.state.monsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App;
