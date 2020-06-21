import style from '../index.module.css'
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
				This text is in `src/react/App.js`<br />
				Connect your Postgresql database in `app.rb`<br />
				Set your app's title in both `public/index.html` and `package.json`
			</div>
		)
	}
}

export default App