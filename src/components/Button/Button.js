import React from "react";

const button = (props) => (
	<button
		className="waves-effect waves-light btn"
		onClick={props.clicked}
		style={{ backgroundColor: "#194350" }}
	>
		{props.children}
	</button>
);

export default button;
