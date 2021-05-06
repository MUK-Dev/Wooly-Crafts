import React from "react";

const iconButton = (props) => (
	<button
		class="waves-effect waves-light btn"
		onClick={props.clicked}
		style={{ backgroundColor: "#ff8882" }}
	>
		<i class="material-icons left">{props.iconType}</i>
		{props.children}
	</button>
);

export default iconButton;
