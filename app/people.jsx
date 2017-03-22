import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import PersonForm from './personForm.jsx';

//CSS 
import css from './css/people.css';

const People = React.createClass({
getInitialState(){
	return({people: []})
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
		else{
			return(
			<div>
			<center>
				<h3 className="community">Community</h3>
				{displayPeople}
			</center>
			</div>
		)
	}
		
	}
})

export default People;