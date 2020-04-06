import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class About extends Component {
	render() {
		var Products = [
			{
				id: 1,
				slug: 'iphone',
				name: 'Iphone X',
				price: 12000000
			},
			{
				id: 2,
				slug: 'samsung',
				name: 'Samsung Galaxy s10',
				price: 18000000
			},
			{
				id: 3,
				slug: 'oppo',
				name: 'Oppo F1s',
				price: 11000000
			},
		];

		var { match } = this.props;
		var url = match.url;

		var result = Products.map((product, index) => {
			return(
				<NavLink to={`${url}/${product.slug}`} key={index}>
					<li className="list-group-item" key={index}>
						{product.id} - {product.name} - {product.price}
					</li>
				</NavLink>
			);
		});

		return (
			<div className="container">
				<h1>Danh sách sản phẩm</h1>

				<div className="row">
					<ul className="list-group">
						{result}
					</ul>
				</div>
				
				<div className="row">
					<Route path="/products/:name" component={Product} />
				</div>
			</div>
		);
	}
}

export default About;
