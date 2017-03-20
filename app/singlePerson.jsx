import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

const SinglePerson = React.createClass({
getInitialState(){
	return({singles: []})
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
	let ID = this.props.params.id;
	$.ajax({
		url: '/api/people/' + ID,
		type: 'DELETE',
		success: ((data)=>{
		console.log('Successful Deletion!')
		})
	})
},
editPerson(e){
	let ID = this.props.params.id;
	$.ajax({
		url:'/api/people/' + ID,
		type:'PUT',
		success: ((data)=>{
			console.log('Sucessful Change!')
		})
	})
},
	render(){
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

					
				<h3 className="editCity">Edit:</h3>
				<form onSubmit={this.editPerson}>
					<input type="text" className="edit"value={this.favoriteCity}onChange={this.cityChange}placeholder="Favorite City"></input><br/>
					<input type="submit" className="btn btn-warning" value="Submit"/>
				</form>
				<button className="btn btn-danger" onClick={this.deletePerson}>Delete</button>


				<div className="recommend">
				<h3>Recommend A Song:</h3>
				Artist<input className="artist" placeholder="enter here"></input>  Song<input className="song"placeholder="enter here"></input>
				<button type="button" className="btn btn-danger">Submit</button>
				</div>
			</div>
		)
	}
})

export default SinglePerson;