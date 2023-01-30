import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import NavigationBar from './routes/navgationBar';

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<NavigationBar />}>
				<Route
					index={true}
					element={<Home />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
