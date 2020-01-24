import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './logo.js';
import MailBox from './mailbox.js'
import ListItem from './listItem.js'
import NameForm from './NameForm.js'

class App extends React.Component{
	
		
		
		 greeting(user){
			return user.f_name+' '+user.l_name;
		}

		constructor(props){
			super(props)
			this.user = {
				f_name	:	"Prafull",
				l_name	:	"Singh",
				_logo	:	logo,
				_designation	: "Lead Technology",
				_address	:	"2nd floor sector 17A gurgoan",
				_phone	:	"8130366230"
			}
			this.state = {
				date: new Date().toLocaleTimeString()
			}
		}
		
		componentWillMount(){
			this.timerId = setInterval(
		  () => this.tick(),
		  1000
		);
		}
		
		tick(){
				this.setState({
						date: new Date().toLocaleTimeString()
				})
				
		}
		
		
		onNameFormChange(value){
			console.log("onNameFormChange: ",value)
		}
		componentWillUnmount(){
			clearInterval(this.timerId)
		}
		
		render(){
			const unreadMessages=['React', 'Re: React', 'Re:Re: React',];
			return (
				<div className="App">
						<ListItem/>
						<NameForm onUpdate={this.onNameFormChange}>
							<span>Testing</span>
						</NameForm>
						<MailBox unreadMessages={unreadMessages}/>
					  <Logo date={this.state.date}/>
					  <header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
						  Edit <code>src/App.js</code> and save to reload.
						</p>
						<h1>
							Hello , {this.greeting(this.user)}
						</h1>
						
						  
					  </header>
				</div>
			);
		}
	
	
}




export default App;
