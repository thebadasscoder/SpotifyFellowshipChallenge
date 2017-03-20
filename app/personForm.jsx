import React from 'react';
import $ from 'jquery';
import {browserHistory} from 'react-router';


const PersonForm = React.createClass({
getInitialState(){
	return({name: '', favoriteCity: ''})
},
nameChange(e){
	this.setState({name: e.target.value})
},
cityChange(e){
	this.setState({favoriteCity: e.target.value})
},
personSubmit(e){
	browserHistory.push('/community');
	e.preventDefault();
	$.ajax({
		url:'/api/people/',
		type:'POST',
		data: this.state
	})
	console.log('New Person Added!')
},
	render(){
		return(
		<div>
		<center>
		<div className="container">
		<h3 className="headingOne">Join Your Music Community</h3>
			<form onSubmit={this.personSubmit}>
				<input type="text" className="form-control"value={this.name} onChange={this.nameChange}placeholder="Name"></input><br/>
				<input type="text" className="form-control"value={this.favoriteCity}onChange={this.cityChange}placeholder="Favorite City"></input><br/>
				<input type="submit" className="btn btn-success" value="Next"/>
			</form>
		</div>
		</center>
		</div>
		)
	}
})

export default PersonForm;