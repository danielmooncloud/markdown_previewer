import React from 'react';
import marked from 'marked';
import TextArea from './TextArea.jsx';
import DisplayArea from './DisplayArea.jsx';




export default class Application extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.initialText.text,
			markdown: marked(this.props.initialText.text)		
		}
	}

	changeText(text) {
		this.setState({
			text: text,
			markdown: marked(text)
		})
	}

	render() {
		return (
			<div className="main">
				<TextArea 
					initialText={this.state.text} 
					changeText={this.changeText.bind(this)}/>
				
				<DisplayArea 
					displayText={this.state.markdown}/>
			</div>
		)
	}
};

Application.propTypes = {
	initialText: React.PropTypes.shape({
		text: React.PropTypes.string.isRequired
	})
}
