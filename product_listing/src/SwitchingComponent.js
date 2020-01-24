import Child from './Child.js'
import CustomTextInput from './CustomTextInput.js'
import EmployeeComponent from './EmployeeComponent.js'
import ErrorBoundary from './ErrorBoundary.js'
import HomeComponent from './HomeComponent.js'
import Parent from './Parent.js'
import React from 'react'

const Components = {
		child 				:	Child,
		customTextInput		:	CustomTextInput,
		employeeComponent	:	EmployeeComponent,
		errorBoundary		:	ErrorBoundary,
		homeComponent		:	HomeComponent,
		parent				:	Parent
	
}

export default function SwitchingComponent(props){
		const { page,...collection } = props;
		const Handler = Components[page] || HomeComponent
		console.log("SwitchingComponent	page		:	",page);
		console.log("SwitchingComponent	collection	:	",collection);
		console.log("SwitchingComponent	Handler		:	",Handler);
		console.log("SwitchingComponent	Components[page]		:	",Components[page]);
		console.log("SwitchingComponent	Components[page]		:	",Components);
		return (<Handler {...collection}/>)
				
}

