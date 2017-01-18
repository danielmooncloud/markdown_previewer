import React from 'react';


export default class TextArea extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.initialText
		}
	}

	handleChange(e) {
		this.props.changeText(e.target.value);
		this.setState({
			text: e.target.value
		})
	}

	render() {
		return (
			<div className="col1">
				<textarea 
						className="textArea" 
						value={this.state.text} 
						onChange={this.handleChange.bind(this)}>
				</textarea>
			</div>
		)
	}
}

TextArea.propTypes = {
	initialText: React.PropTypes.string.isRequired,
	changeText: React.PropTypes.func.isRequired
}

