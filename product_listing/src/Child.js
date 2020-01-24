import React from 'react'
import './index.css'
import CustomTextInput from './CustomTextInput.js'

class Child extends React.Component{
	
	constructor(props){
		super(props)
		this.props = props
		this.customRef = React.createRef();
		this.fancyButtonRef = React.createRef()
	}
	
	onClick(event){
		//event
		setTimeout(()=>{
				console.log("onCLick	:	",event.type)
		},100)
	}
	
	
	buttonClick = event =>{
		this.fancyButtonRef.current.children[0].value = "Prafull"
		console.log("buttonClick	:	",this.fancyButtonRef.current.children[0].value)
	}
	render(){
		
		return (
			<div className="modal">
				<button onClick={this.onClick}> Clickk Me! </button>
				<CustomTextInput ref={this.customRef}/>
				<FancyButton ref={this.fancyButtonRef}>
					<input type="text"/>
					<button onClick={this.buttonClick} > Fancy Button </button>
				</FancyButton>
			</div>
		)
	}

}

const FancyButton = React.forwardRef((props,ref)=>(
		
		<div ref={ref}>
			{
				props.children
				
			}
		</div>
))

export default Child
