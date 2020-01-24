import React from 'react'
import Modal from './Modal.js'
import Child from './Child.js'



class Parent extends React.Component{
		
		text = {
			name:"Parent"
		}
		
		constructor(props){
			super(props)
			this.props = props;
			this.state = { clicks:0 }
			
			
		}
		componentDidMount(){
			
		}
		
		handleClick = () => {
			this.setState(state=>({
					clicks: state.clicks + 1
			}))
			
			//this.props.onClickUpdate(this.state.clicks)
			
		}
		
		
		getStyle(){
			return {
				color:	'blue',
				backgroundImage:'url(https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)'
			}
		}
		
		getInnerHTML(){
			return {
				__html:'<React.Fragment><label>Name:	</label><input type="text" placeholder="Enter User Name"/><label>Age:	</label><label>Gender:	</label></React.Fragment>'
			}
			
		}
		render(){
			
			if (this.state.clicks === 5) {
				//throw new Error('I crashed!');
			}
			return(
				
					<div id="filter_table" onClick={(e)=>this.handleClick(e)}>
						<p> Number of Clicks: {this.state.clicks} </p>
						<Modal>
							<Child/>
						</Modal>
						<div style={this.getStyle()} dangerouslySetInnerHTML={this.getInnerHTML()} />
					</div>
				
			)
		}
}


export default Parent
