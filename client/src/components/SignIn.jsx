/* global gapi */

import React from 'react';

class SignIn extends React.Component{
	constructor(props){
	  super(props);
		this.onSignIn = this.onSignIn.bind(this)
  }

  componentDidMount() {
		setTimeout(()=> {gapi.signin2.render('my-signin2', {
			'scope': 'profile email',
			'width': 250,
			'height': 50,
			'longtitle': true,
			'theme': 'light',
			'onsuccess': this.onSignIn
		})}, 5);
  }

  onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
	  this.props.afterSignIn(profile.getName());
    this.props.changeView('home');
  }

  render() {
	  return (
	    <div>
		    <div id="my-signin2" data-onsuccess={this.onSignIn}></div>
	    </div>
	  )
  }
}

export default SignIn