import React from 'react'
import ReactDOM from 'react-dom'

class Modal extends React.Component{
		
		constructor(props){
			super(props);
			this.props = props;
			this.e1 = document.createElement('div');
			
		}
		
		componentDidMount(){
			this.appRoot =   document.getElementById('filter_table')
			
			this.appRoot.appendChild(this.e1);
		}
		
		componentWillUnmount(){
			//appRoot.removeChild(this.e1)
		}
	
		render(){
			return (
				ReactDOM.createPortal(
					this.props.children,
					this.e1
				)
			)
		}
}



export default 	Modal;




