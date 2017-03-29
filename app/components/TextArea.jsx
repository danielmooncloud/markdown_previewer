import React, {Component, PropTypes} from "react";


export default class TextArea extends Component {
	constructor(props) {
		super(props);	
	}

	handleChange(e) {
		this.props.changeText(e.target.value);
	}

	render() {
		return (
			<div className="col1">
				<textarea 
					className="textArea" 
					value={this.props.text} 
					onChange={this.handleChange.bind(this)}>
				</textarea>
			</div>
		);
	}
}

TextArea.propTypes = {
	text: PropTypes.string.isRequired,
	changeText: PropTypes.func.isRequired
};

