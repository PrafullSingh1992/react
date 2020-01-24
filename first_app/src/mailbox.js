import React from 'react'


class MailBox extends React.Component{
	
	constructor(props){
		super(props)
		this.props = props;
	}
	
	componentWillMount(){
	}
	
	componentWillUnmount(){
	}


	render(){
		const unreadMessages = this.props.unreadMessages;
		return (
			<div>
				<h1> Hello!</h1>
				{
					unreadMessages.length > 0 && 
					<h2>
					You have {unreadMessages.length} unread message.
					</h2>
				}
			</div>
		)	
	}
}

export default MailBox;
