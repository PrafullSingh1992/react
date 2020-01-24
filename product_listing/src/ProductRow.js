import React from 'react'

class ProductRow extends React.Component{
		constructor(props){
			super(props)
			this.props = props;
			this.state={
				name: this.props.detail ? this.props.detail.name : '',
				price: this.props.detail ? this.props.detail.price : ''
			}
		}
		
		render(){
			return(
			<div>
				<label>{this.props.detail.name}</label>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<label>{this.props.detail.price}</label>
			</div>
			)
		}
		
		
		/**
		 * This method is called when change in props/state occurs
		 * 
		 * @return true is want to update UI otherwise false
		 */
		shouldComponentUpdate(nextProps, nextState){
			
			return true
		}
}

export default ProductRow
