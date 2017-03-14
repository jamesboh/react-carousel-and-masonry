import React, { Component } from 'react';

const heroItems = [{
	id: 1,
	h1: 'Screening: DVF Secret Agent Part 1',
	h2: 'October 15, 2017',
	p: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, direct Peter Lindberg',
	image: '/public/img/hero landing.jpg'
}, {
	id: 2,
	h1: 'Screening: DVF Secret Agent Part 2',
	h2: 'October 15, 2017',
	p: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, direct Peter Lindberg',
	image: '/public/img/Layer 60.jpg'
}, {
	id: 3,
	h1: 'Screening: DVF Secret Agent Part 3',
	h2: 'October 15, 2017',
	p: 'Join us for a private screening of DVF Secret Agent Part 2 with our special guest, direct Peter Lindberg',
	image: '/public/img/Layer 61.jpg'
}];

export default class Carousel extends Component {
	constructor (props) {
		super(props);
		this.loopCarousel = this.loopCarousel.bind(this);
		this.updateActiveSlide = this.updateActiveSlide.bind(this);
	}

	componentDidMount () {
		this.loopCarousel(0);
	}

	loopCarousel (initialSlide) {
		const slides = document.getElementById('slides').getElementsByTagName('li');
		const navDots = document.getElementById('nav-dots').getElementsByTagName('li');

		[...slides,...navDots].forEach( el => el.className = '' );
		[slides[initialSlide], navDots[initialSlide]].forEach( el => el.className = 'active' );

		this.intervalId = setInterval( () => {
			let activeElements = document.getElementsByClassName('active');

			if (activeElements[0].nextSibling) {
				[...activeElements].forEach( activeElement => {
					activeElement.nextSibling.className = 'active';
					activeElement.className = '';
				});
			} else {
				[...activeElements].forEach( activeElement => {
					activeElement.className = '';
				});
				[slides[0],navDots[0]].forEach( el => el.className = 'active' );
			}
		},5000);
	}

	updateActiveSlide (id) {
		clearInterval(this.intervalId);
		this.loopCarousel(id);
	}

	render () {

		return (
			<div id="carousel">
				<ul id="slides">
					{
						heroItems.map(heroItem => {
							return (
								<li key={heroItem.id}>
									<div className="hero">
										<img src={heroItem.image} />
									</div>
									<div className="content">
										<h1>{heroItem.h1}</h1>
										<h2>{heroItem.h2}</h2>
										<p>{heroItem.p}</p>
									</div>
								</li>
							)
						})
					}
				</ul>
				<ol id="nav-dots">
					{
						heroItems.map(heroItem => {
							return (
								<li key={heroItem.id}>
									<a onClick={() => this.updateActiveSlide(heroItem.id-1)}>{heroItem.id}</a>
								</li>
							)
						})
					}
				</ol>
			</div>
		);
	}
}

