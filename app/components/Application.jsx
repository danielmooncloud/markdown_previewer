import React, {Component, PropTypes} from "react";
import marked from "marked";
import TextArea from "./TextArea.jsx";
import DisplayArea from "./DisplayArea.jsx";


export default class Application extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.initialText.text,
			markdown: {
				__html: marked(this.props.initialText.text)
			}		
		};
	}

	changeText(text) {
		this.setState({
			text: text,
			markdown: {
				__html: marked(text)
			}
		});
	}

	render() {
		return (
			<div className="main">
				
				<TextArea 
					text={this.state.text} 
					changeText={this.changeText.bind(this)}/>
				
				<DisplayArea 
					markdown={this.state.markdown}/>
			</div>
		);
	}
}

Application.propTypes = {
	initialText: PropTypes.shape({
		text: PropTypes.string.isRequired
	}).isRequired
};
