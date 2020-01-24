import React from 'react'

class ErrorBoundary extends React.Component{
	
	constructor(props){
		super(props)
		this.props = props;
		this.state = { hasError	:	false }
		
	}

	
	componentDidCatch(error, errorInfo) {
		this.setState({
		  error: error,
		  errorInfo: errorInfo
		  
		})
	}
  
  static getDerivedStateFromError(error) {
     // Update state so the next render will show the fallback UI.
     return { hasError: true };
   }
	
  
	
	
	render() {
		if (this.state.errorInfo) {
		  return (
			<div>
			  <h1>Oops, something went wrong :(</h1>
			  <p>The error: {this.state.error.toString()}</p>
			  
			</div>
		  );
		}
		return this.props.children;
  }

}


export default ErrorBoundary
