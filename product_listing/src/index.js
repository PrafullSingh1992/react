import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableProductTable from './FilterableProductTable.js'

import  {BrowserRouter as Router, Route, Link, Switch, HashRouter}  from 'react-router-dom'
import HomeComponent from './HomeComponent.js'
import EmployeeComponent from './EmployeeComponent.js'




const App = React.memo(function App(){
		return(
			<div>
				<RouterComponent id="1"/>
				<ProductRouter />
			</div>
		)
})



const ProductRouter = React.memo(function ProductRouter(){
		return (
		<main>
			<Switch >
				<Route path="/Home" component={HomeComponent} />
				<Route path="/employee/:number" component={EmployeeComponent}/>
				<Route exact path='/' component={HomeComponent}/>
			</Switch>
		</main>
		)
})




const RouterComponent = React.memo(function RouterComponent(props){
	
	return (
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to={`/employee/${props.id}`}>employee</Link>
					</li>
				</ul>
				
			</div>
	)
	})
	

///ReactDOM.render(( <HashRouter><App/></HashRouter>), document.getElementById('root'));
ReactDOM.render(<FilterableProductTable/>, document.getElementById('root'));






