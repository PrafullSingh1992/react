import React from 'react'


class HomeComponent extends React.Component{
	
		constructor(props){
			super(props)
			this.props = props;
			this.state = {}
			console.log("HomeComponent")
		}
		
		componentDidMount(){
		}
		
		componentWillUnmount(){
		}
		
		shouldComponentUpdate(nextProps, nextState){
			return true;
		}
		
		render(){
			return(
				<div>
					Home Component
				</div>
			)
		}
	
}

export default HomeComponent;
