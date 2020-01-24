import React from 'react'
import Parent from './Parent.js'
const employeeList ={ employee: [
						{name:"Prafull",companyName:"Decimal Technology",id:1},
						{name:"Mujesh",companyName:"Decimal Technology",id:2},
						{name:"Himanshu",companyName:"Decimal Technology",id:3},
						{name:"Nakul",companyName:"Decimal Technology",id:4},
						{name:"Barun",companyName:"Decimal Technology",id:5}
					],
					get: function(id){
						const isEmployee = p => p.id === id;
						return [this.employee.find(isEmployee)];
						
					},
					all:function(){
						return this.employee
					}
				}

class EmployeeComponent extends React.Component{

		constructor(props){
			super(props)
			this.props = props;
			
			const empList = this.props.match.params.number ? employeeList.get(+this.props.match.params.number) : employeeList.all()
			this.state = {
				empList
			}
			
		}
		
		componentDidMount(){
		}
		
		componentWillUnmount(){
		}
		
		//const employeeAPI = 
		
		shouldComponentUpdate(nextProps,nextState){
			if(nextProps.match && nextProps.match.params && nextProps.match.params.number !== this.props.match.params.number){
				const empList = this.props.match.params.number ? employeeList.get(+this.props.match.params.number) : employeeList.all()
				this.setState({
					empList
				})
			}
			return true
		}
		
		
		render(){
			
			
			return(
				<div>
				{
					this.state.empList.map((emp , index)=>{
								return (
								<div key={index}>
									<label>{emp.name}</label>
									<label>{emp.companyName}</label>
								</div>)
					})
				}
				<Parent/>
				</div>
			)
		}
	
}

export default EmployeeComponent;
