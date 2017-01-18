import React from 'react';


export default class DisplayArea extends React.Component{
	
	createMarkUp() {
		return {__html: this.props.displayText}
	}

	render() {
		return (
			
			<div className="col2">	
				<div	
					readOnly 
				 	className="textArea" 
				 	id="display" 
				 	dangerouslySetInnerHTML={this.createMarkUp()}>
				</div>	
			</div>

		)
	}
}





DisplayArea.propTypes = {
	displayText: React.PropTypes.string.isRequired
}