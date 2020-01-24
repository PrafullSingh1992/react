import React from 'react';


class Logo extends React.Component{
	
	
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			date: props.date,
			_name: "Prafull"
		}
		//this.activateLasers = this.activateLasers.bind(this);
	}
	
	componentDidMount(){
	}
	
	componentWillUnmount(){
	}
	
	//activateLasers = () =>{
	//	console.log("activate Lasers: ",this.props.date)
	//	}
	
	activateLasers(){
		console.log("activate Lasers: ",this.props.date)
	}
	
	
	render(){
		return (
			<div>
			  <h1>Hello, world!</h1>
			  <h2>It is {this.props.date}.</h2>
			  <button onClick={(e) => this.activateLasers(e)}> Activate Lasers </button>
			</div>
		);	
	}
	
	
}






export default Logo;
