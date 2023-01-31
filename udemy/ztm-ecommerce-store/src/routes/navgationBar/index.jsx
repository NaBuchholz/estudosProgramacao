import React, { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './styles.scss';

const NavigationBar = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link
					className="logo-container"
					to="#">
					<CrwnLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link
						className="nav-link"
						to="#">
						Shop
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default NavigationBar;
