import React from 'react';

class NameForm extends React.Component{

	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			value : ''	
		}
	}

	componentWillMount(){
		console.log("this.props.children: ",this.props.children)
	}

	componentWillUnmount(){
	}
	
	onChange(event){
		const target = event.target;
		const value = target.type==='checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({
				[name]: value
		})
		//console.log(this.state.value)
		this.props.onUpdate(this.state)
	}

	handleSubmit(event){
		event.preventDefault();
		console.log("handleSubmit: ", this.state)
	}
	
	
	render(){	
		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>
				<label>
					Address:
					<input  name="address"	type="text" value = { this.state.address } onChange={ (e) => this.onChange(e)} />
				</label>
				
				<select  multiple={true} value={['B','C']} >
					<option value="A"> A </option>
					<option value="B"> B </option>
					<option value="C"> C </option>
					<option value="D"> D </option>
					<option value="E"> E </option>
					<option value="F"> F </option>
				</select>
				<input name="fileUpload" type="file" value={this.state.fileUpload} onChange={	(e) => this.onChange(e)	} />
				<input type="text" name="f_name"	value={this.state.f_name}	onChange={(e)	=>	this.onChange(e)	} />
				<input type="text" name="l_name"	value={this.state.l_name}	onChange={(e)	=>	this.onChange(e)	}/>
				{this.props.children}
				
				<input type="submit" value="Submit"/>
			</form>
		);
	}


}

export default NameForm;
