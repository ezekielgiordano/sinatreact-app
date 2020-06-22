import style from '../index.module.css'
import sample_image from '../assets/sample_image.png'
import React, { Component } from 'react'
// import { BrowserRouter, Route, Link} from 'react-router-dom'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div className={style['use-class-tags-this-way-for-css']}>
				<h3>This text is in "src/react/App.js"</h3>
				<h3>Connect your Postgresql database in "app.rb"</h3>
				<h3>Set your app's title in both "public/index.html" and "package.json"</h3>
				<br />
				<img src={sample_image} alt="" />
			</div>
		)
	}
}

export default App
