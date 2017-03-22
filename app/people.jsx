import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import PersonForm from './personForm.jsx';

//CSS 
import css from './css/people.css';

const People = React.createClass({
getInitialState(){
	return({people: [], clicked: false})
},
componentDidMount(){
	$.ajax({
		url: '/api/people',
		type: 'GET',
		success: ((data)=>{
			data ? this.setState({people: data}) : console.log('Error with people object')
		})
	})
},
newestCity(e){
	this.setState({clicked: true})
},
	render(){
		console.log('PROPS', this.props)
		let displayPeople = this.state.people.map((val,indx)=>{
			return(
				<div className="cities"key={indx}><Link className="ppl" to={"/people/" + val.id}><p id="city">{val.favoriteCity}</p><p id="name">{val.name}</p></Link></div>
			)
		})
		if(!this.state.people){
			return(<div> Still Waiting.....</div>)
		}
		if(this.state.clicked){
			return(
				<div>
				<PersonForm/>
				<p id="refresh">Refresh Page</p>
				</div>
			)
		}
		else{
			return(
			<div>
			<center>
				<h3 className="community">Community</h3>
				{displayPeople}
			<button className="add btn btn-default" onClick={this.newestCity}>+</button>
			</center>
			</div>
		)
	}
		
	}
})

export default People;