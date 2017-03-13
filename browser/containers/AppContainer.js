import React, { Component } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Masonry from '../components/Masonry';
import Footer from '../components/Footer';

export default class AppContainer extends Component {

	render () {
		return (
			<div id="main">
				<Header />
				<Carousel />
				<Masonry />
				<Footer />
			</div>
		);
	}
}