import React, { Component } from 'react';

export default class Header extends Component {

	render () {
		return (
			<div id="header">
				<div id="logo">
					<h1>SpartaPlaesent</h1>
				</div>
				<div id="nav">
					<ul>
						<li>212.555.5555</li>
						<li>LOGIN</li>
					</ul>
				</div>
				<div id="hamburger">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}
}