import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<Fragment>
			<div className="navigation">
				<div>logo</div>
				<div className="nav-links-container">
					<Link
						className="nav-link"
						to=""></Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default NavigationBar;
