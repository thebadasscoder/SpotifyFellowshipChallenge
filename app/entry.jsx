import ReactDOM from 'react-dom';
import React from 'react';
import {browserHistory, IndexRoute, Router, Route} from 'react-router';

//Components 
import PersonForm from './personForm.jsx';
import People from './people.jsx';
import SinglePerson from './singlePerson.jsx';

//CSS
import css from './css/app.css';
import profileCss from './css/people.css';
import singleCss from './css/single.css';

const App = React.createClass({
	render(){
		return(
			<div>
			{this.props.children}
			</div>
		)
	}
})

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
		   <IndexRoute component={PersonForm}/>
		   <Route path="intro" component={PersonForm}/>
		   <Route path="community" component={People}/>
		   <Route path="people/:id" component={SinglePerson}/>
		</Route>
	</Router>,
document.getElementById('root')
)