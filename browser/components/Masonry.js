import React, { Component } from 'react';

const articles = [{
	id: 1,
	title: 'Artisanal iconic cutting edge business class.',
	date: 'January 12, 2017',
	image: '/public/img/Layer 22.jpg',
	presentedBy: 'Lorem Ipsum'
}, {
	id: 2,
	title: 'K-pop extraordinary.',
	date: 'January 18, 2017',
	image: '/public/img/Layer 21.jpg',
	presentedBy: 'Lorem Ipsum'
}, {
	id: 3,
	title: 'Esse airport veniam ryokan soft power.',
	date: 'January 21, 2017',
	image: '/public/img/Layer 20.jpg',
	presentedBy: 'Lorem Ipsum'
}, {
	id: 4,
	title: 'St Moritz uniforms Beams.',
	date: 'January 27, 2017',
	image: '/public/img/Layer 19.jpg',
	presentedBy: 'Lorem Ipsum'
}, {
	id: 5,
	title: 'Sharp bureaux sleepy K-pop carefully curated.',
	date: 'February 2, 2017',
	image: '/public/img/Layer 18.jpg',
	presentedBy: 'Lorem Ipsum'
}, {
	id: 6,
	title: 'Bureaux exquisite delightful carefully curated soft power.',
	date: 'February 10, 2017',
	image: '/public/img/Layer 14.jpg',
	presentedBy: 'Lorem Ipsum'
}];

export default class Masonry extends Component {
	constructor (props) {
		super(props);
		this.handleImageLoaded = this.handleImageLoaded.bind(this);
	}

	componentDidMount () {
		// this.handleImageLoaded();
		window.addEventListener('resize', this.handleImageLoaded);
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.handleImageLoaded);
	}

	handleImageLoaded () {
		setTimeout(() => { //set timeout is to address a positioning bug with the 2nd column 2nd row item.
			//media queries
			let columns;
			let gutter;
			let totalContentWidth;
			let marginBottom = 50;
			if (window.innerWidth <= 576) {
				columns = 1;
				gutter = 0;
				totalContentWidth = 100;
			} else if (window.innerWidth <= 768) {
				columns = 2;
				gutter = 10;
				totalContentWidth = 90;
			} else {
				columns = 3;
				gutter = 5;
				totalContentWidth = 90;
			}

			const articlesDOM = [...document.getElementsByTagName('article')];

			//initialize width
			articlesDOM.forEach( article => article.style.width = '' + totalContentWidth/columns + '%' );

			//object to store position from top with columns as keys
			let positionsFromTop = {};
			for ( let i = 0; i < columns; i++ ) {
				positionsFromTop[i] = 0;
			}
			

			for ( let i = 0; i < articlesDOM.length; i++ ) {
				//set horizontal positions
				articlesDOM[i].style.left = '' + (totalContentWidth/columns + gutter) * (i%columns) + '%';

				//set vertical positions
				if ( i < columns ) {
					articlesDOM[i].style.top = positionsFromTop[i];
				} else {
					positionsFromTop[i%columns] += articlesDOM[i-columns].offsetHeight;
					articlesDOM[i].style.top = '' + (positionsFromTop[i%columns] + marginBottom) + 'px';
				}
			}
		}, 100)
	}

	render () {
		return (
			<div id="masonry">
				{
					articles.reverse().map(article => {
						return (
							<article key={article.id} ref="article">
								<div className="featured-image">
									<img 
										src={article.image}
										onLoad={this.handleImageLoaded} />
								</div>
								<div className="post-content">
									<div className="post-header">
										<span className="date">{article.date}</span>
										<h2 className="title">{article.title}</h2>
										<p>Presented by <a>{article.presentedBy.toUpperCase()}</a></p>
									</div>
								</div>
							</article>
						)
					})
				}
			</div>
		);
	}
}