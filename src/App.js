// Skeleton code for routing with react
// Disregard many of the comments, they are mostly notes to myself

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import API
// import components

// this is using classes but we can achieve the same thing using hooks
class App extends React.Component {
	// global state here
	state = { }

	// we could add onLoginSuccess and logOut functions here if we use JSON web tokens
	
	render() {
		const { currentUser } = this.state
		return (
			<div className='App container'>
				{/* NavBar is passing in the state. In NavBar prop, include ternary to determine what it looks like if there is
				a user logged in or not. */}
				<NavBar currentUser={} />

				<Switch>
				{/* routes to handle log in, log out, and sign up if we use JWT */}
					<Route path="/login" render={(props) => {
						
						return <LogIn  // here, you can make reference to the onLoginSuccess function
						// you build and use it to update the state
						/>
					}} />

					<Route path="/logout" render={() => {
						return <LogOut // here, you can make reference to the logOut function
						// you build and use it to update the state 
						/>
					}} />

					<Route path="/signup" render={(props) => {
						return <SignUp // the sign up component takes an 'onSignUpSuccess' prop which will perform 
						// the same thing as onLoginSuccess: set the state to contain the currentUser
						/>
					}} />
					{/* this route renders the bucket list page if there is a user logged in. BUT if there's no one logged in
					and someone tries to access the bucket list page by entering the path into the URL, it will just redirect
					the user back to the login page. Cool piece of code we learned in class to create a more secure page */}
					<Route path="" render={() => {
						return currentUser
							? <BucketList profile={currentUser} />
							: <Redirect to="/login" />
					}} />

					<Route path="/" component={Home} />

				</Switch>
			</div>
		)
	}
}

export default App