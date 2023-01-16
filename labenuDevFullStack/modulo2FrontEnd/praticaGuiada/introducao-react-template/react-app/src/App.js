import './App.css';
import logo from './img/logo.png';

function App() {
	function olaMundo() {
		alert('Clicou no botão');
	}
	return (
		// <main>
		// 	<h1>Introdução ao React</h1>
		// 	<button onClick={olaMundo} className="meu-nome">
		// 		Clique em mim, {nome}
		// 	</button>
		// </main>
		<div className="container">
			<h1>Aprenda React na Labenu!</h1>
			<div>
				<div>
					<img className="Logo" src={logo} alt="logo" />
				</div>
				<div>
					<a href="https://labenu.com.br">Site da Labenu</a>
				</div>
				<div>
					<button onClick={olaMundo}> Clique aqui! </button>
				</div>
			</div>
		</div>
	);
}

export default App;
