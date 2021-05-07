import React from "react";

const iconButton = (props) => (
	<button
		className="waves-effect waves-light btn"
		onClick={props.clicked}
		style={{ backgroundColor: "#ff8882" }}
	>
		<i className="material-icons left">{props.iconType}</i>
		{props.children}
	</button>
);

export default iconButton;
