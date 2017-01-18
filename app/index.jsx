import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './scss/application.scss';


import initialText from './exampleText.jsx'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});


class TextArea extends React.Component{
	
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



class DisplayArea extends React.Component{
	
	createMarkUp() {
		return {__html: this.props.displayText}
	}

	render() {
		return (
			<div className="col2">
				<div readOnly 
					className="textArea" 
					id="display" 
					dangerouslySetInnerHTML={this.createMarkUp()}>
				</div>
			</div>
		)
	}
}




class Application extends React.Component{
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
		console.log(this.state.text);
		console.log(marked(this.state.text))
		console.log(this.state.markdown);
		return (
			<div className="main">
				<h1>{this.state.string}</h1>
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

Application.defaultProps = {
	initialText: {
		text: "There was an error retrieving your data"
	}
}


ReactDOM.render(<Application initialText={initialText}/>, document.getElementById('container'));



