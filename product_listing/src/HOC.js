import React from 'react'

function HOC(WrappedComponent){
	class InnerComponent extends React.Component{
		constructor(props){
			super(props)
			this.props = props
		}
			
		render(){
			return (
				<WrappedComponent	{...this.props}	/>
			)
		}
	}
	
	
	return InnerComponent
}
