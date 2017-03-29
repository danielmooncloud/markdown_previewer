import React, {PropTypes} from "react";


const DisplayArea = (props) => {
	
	return (		
		<div className="col2">	
			<div	
				readOnly 
				className="textArea" 
				id="display" 
				dangerouslySetInnerHTML={props.markdown}>
			</div>	
		</div>
	);
};


DisplayArea.propTypes = {
	markdown: PropTypes.shape({
		__html: PropTypes.string.isRequired
	}).isRequired
};

export default DisplayArea;