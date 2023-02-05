import { Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import NavigationBar from './routes/navgationBar';
import SingIn from './routes/sing-in';

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
				<Route
					path="sing-in"
					element={<SingIn />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
