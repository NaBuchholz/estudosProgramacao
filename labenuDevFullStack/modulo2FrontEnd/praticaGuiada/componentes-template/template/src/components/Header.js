import React from 'react';
import logo from '../img/logo.png';
export default function Header() {
	return (
		<header>
			<img src={logo} width="50px" higth="50px" />
			<h3>Header aqui</h3>
		</header>
	);
}
