import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					{/* Menu */}
					<nav className="navbar navbar-inverse">
						<ul className="nav navbar-nav">
							<li>
								{/* <a href="/">Trang chủ</a> */}
								{/* <NavLink activeStyle={{
									backgroundColor: 'white',
									color: 'red'
								}} exact to="/" className="my-link">Trang chủ</NavLink> */}
								<NavLink activeClassName="active" exact to="/" className="my-link">Trang chủ</NavLink>
							</li>
							<li>
								<NavLink activeClassName="active" to="/about" className="my-link">Giới thiệu</NavLink>
							</li>
							<li>
								<NavLink activeClassName="active" to="/contact" className="my-link">Liên hệ</NavLink>
							</li>
						</ul>
					</nav>
					{/* Nội dung */}
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</div>
			</Router>
		);
	}
}

export default App;
