import React, { Component } from 'react';

const articles = [{
	id: 1,
	title: 'Artisanal iconic cutting edge business class.',
	date: 'January 12, 2017',
	image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584',
	presentedBy: 'Lorem Ipsum'
}, {
	id: 2,
	title: 'K-pop extraordinary.',
	date: 'January 18, 2017',
	image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584',
	presentedBy: 'Lorem Ipsum'
}, {
	id: 3,
	title: 'Esse airport veniam ryokan soft power.',
	date: 'January 21, 2017',
	image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584',
	presentedBy: 'Lorem Ipsum'
}, {
	id: 4,
	title: 'St Moritz uniforms Beams.',
	date: 'January 27, 2017',
	image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584',
	presentedBy: 'Lorem Ipsum'
}, {
	id: 5,
	title: 'Sharp bureaux sleepy K-pop carefully curated.',
	date: 'February 2, 2017',
	image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584',
	presentedBy: 'Lorem Ipsum'
}, {
	id: 6,
	title: 'Bureaux exquisite delightful carefully curated soft power.',
	date: 'February 10, 2017',
	image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584',
	presentedBy: 'Lorem Ipsum'
}];

export default class Masonry extends Component {

	render () {
		return (
			<div id="masonry">
				{
					articles.map(article => {
						return (
							<article key={article.id}>
								<div className="featured-image">
									<img src={article.image} />
								</div>
								<div className="post-content">
									<div className="post-header">
										<h2 className="title">
											{article.title}
										</h2>
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