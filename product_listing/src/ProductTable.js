import React from 'react'
import ProductCategoryRow from './ProductCategoryRow.js'

import './index.css';
import ThemeContext from './ThemeContext.js'
import PropTypes from 'prop-types'



class ProductTable  extends React.Component{
	
	constructor(props){
		super(props);
		
		this.props = props;
		this.state = {};
		
		
	}
	
	componentWillMount(){
	}
	
	componentWillUnmount(){
	}
	
	componentDidUpate(prevProps){
			
	}
	static contextType = ThemeContext
	render(){
		
		const list = [...this.props.list.values()];
		return(
		<div>
		
			<label>Name</label>
			<label>Price</label>
			{
				list.map((value)=>{
					return value.map((_value,index)=>{
						
					return(
						<div key={index} > 
							<ProductCategoryRow name= {_value.category} />
							<Row detail= {_value} /> 
							<label>: context :  
								{
										this.context
								}
							</label>
						</div>)
				})})
				
			}
			
		</div>
		)
	}
}

/**
 * React.memo Create react component as function
 * 
 * a high order component
 */
const Row = React.memo(function MyComponent(props){
		return (
			<div>
				<label>{props.detail.name}</label>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<label>{props.detail.price}</label>
			</div>
		)
})

ProductTable.propTypes = {
	list:	PropTypes.object
}

ProductTable.defaultProps={
	name:"Prafull SIngh"
}

export default ProductTable;
