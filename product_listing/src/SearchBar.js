import React from 'react'


class SearchBar extends React.Component{
		
		constructor(props){
			super(props);
			this.props = props;
			this.state = {
			}
			this.textInput = React.createRef()
			
		}
		
		upateValue(){
			console.log("SearchBar	:	","upateValue	:	")
		}
		
		componentWillMount(){
			//console.log("this.textInput.current: ",this.textInput)
			//this.textInput.current.focus();
			window.addEventListener('click',this.windowClickListner)
		}
		
		windowClickListner(event){
			console.log("windowClickListner	:",event)
		}	
		componentWillUnmount(){
		}
		onChange	=	(event)	=>{
			this.props.onSearchUpdate(event.target.value)
		}
		onUpdate = (event) => {
			this.textInput.current.focus()
		}
		
		render(){
			return (
				<div>
					<input	 type="text"	name="search_bar" placeholder="Search..." onChange={this.onChange} ref={this.textInput} />
					

					<label>
						<input	type="checkbox"	name="show_product_in_stock" onChange={this.onUpdate}/>
						Only show products in stock
					</label>
					
					NBut
				</div>
			)
		}
	
}

export default SearchBar;
