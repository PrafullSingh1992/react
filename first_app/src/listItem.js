import React from 'react'

class ListItem extends React.Component{
	
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
				list:[]
			}
	}
	
	componentWillMount(){
		this.setState({
			list: [1,2,3,4]
		})
	}
	
	componentWillUnmount(){
	}
	
	updateList = () => {
		this.setState({
			list: [1,2,3,4,5]
		})
	}
	
	removeItem = () => {
			this.setState({
					list: [2,3,4]
			})
	}
	getList(){
		const arr = this.state.list
		return arr.map( (element)	=> <li key={element.toString()} >{element}</li> )
	}
	
	render(){
		return (
			<div>
				<ul>{this.getList()} </ul>
				<button  onClick={this.updateList}>Update List </button>
				<button onClick={this.removeItem}> Remove Item </button>
			</div>
		)
	}
}

export default ListItem;
