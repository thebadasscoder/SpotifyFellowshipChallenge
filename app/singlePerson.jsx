import React from 'react';
import $ from 'jquery';
import {Link , browserHistory} from 'react-router';

const SinglePerson = React.createClass({
getInitialState(){
	return({singles: [], editing: false, favoriteCity: ''})
}, 
componentDidMount(){
	let ID = this.props.params.id;
	$.ajax({
		url: '/api/people/' + ID,
		type: 'GET',
		success:((data)=>{
			this.setState({singles: data})
		})
	})
},
deletePerson(e){
	browserHistory.push('/community');
	let ID = this.props.params.id;
	$.ajax({
		url: '/api/people/' + ID,
		type: 'DELETE',
		success: ((data)=>{
		console.log('Successful Deletion!')
		})
	})
},
editCity(e){
	this.setState({editing: true, favoriteCity: e.target.value})
},
updateCity(e){
	let ID = this.props.params.id 
	$.ajax({
		url: '/api/people/' + ID,
		type: 'PUT',
		data: this.state.favoriteCity,
		success:((data)=>{
		console.log('updated was made')
		})
	})
},
	render(){
		console.log('CITIES', this.state.favoriteCity);
	if(this.state.editing){
		return(
			<div>
				<input type="text" value={this.state.favoriteCity} onChange={this.editCity} placeholder="Enter Here"></input>
				<button type="button" className="btn btn-default" onClick={this.updateCity}>Save</button>
			</div>
		)
	}
	else{		
		return(
			<div className="single">	
				<h1>{this.state.singles.favoriteCity}</h1>
				<h3>{this.state.singles.name}'s Playlist</h3>
					<ol>
						<li>24k Magic  Bruno Mars</li>
						<li>Side  Ariana Grande Ft Nicki Minaj</li>
						<li>One Dance  Drake </li>
						<li>Zero  Chris Brown </li>
						<li>Last Friday Night  Katy Perry</li>
					</ol>

			<div className="recommend">
				<h3>Recommend A Song:</h3>
				Artist<input className="artist" placeholder="enter here"></input>Song<input className="song"placeholder="enter here"></input>
				<button type="button" className="btn btn-default">Submit</button>
			</div>
				<button type="button" className="btn btn-default edit" onClick={this.editCity}>Edit</button>
				<button className="btn btn-danger" onClick={this.deletePerson}>Delete</button>
			</div>
		)
		}
	}
})

export default SinglePerson;