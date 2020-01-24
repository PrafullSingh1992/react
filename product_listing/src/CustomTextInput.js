import 	React from 'react'


class CustomTextInput extends React.Component{

		constructor(props){
			super(props);
			this.textInput = React.createRef()
			
		}
	
	onCopy = event =>{
		event.preventDefault();
		
	}
	
	onSelect = event	=>	{
		event.preventDefault();
		
	}
	focusTextInput = ()=>{
		this.textInput.current.focus()
	}
	
	render(){
		return (
			<div>
				<input type="text" ref={this.textInput}	 onSelect={this.onSelect}/>
				<input type="button"
						value="focus on text input"
						onClick={this.focusTextInput} />
			</div>
		)
	}
}


export default CustomTextInput;

