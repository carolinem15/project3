import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// import stylesheet

import App from './App'

ReactDOM.render(
    // router wrap
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
)