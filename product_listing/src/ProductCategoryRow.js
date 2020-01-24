import React from 'react'


class ProductCategoryRow extends React.Component{
	constructor(props){
		super(props);
		this.props = props;
		
		this.state = {
			name: this.props.detail ? this.props.detail.name : ''
		}
	}
	
	componentDidUpate(prevProps){
		console.log("ProductCategoryRow	:","componentDidUpate	:",prevProps)
	}
	
	render(){
		return(
		<div>	
			<label>{this.props.name}</label>
		</div>
		)
	}
}

export default ProductCategoryRow;
