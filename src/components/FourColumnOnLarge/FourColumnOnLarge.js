import React from "react";

const responsiveColumn = (props) => (
	<div className="center-align">
		<div className="col s12 m6 l3">{props.children}</div>
	</div>
);

export default responsiveColumn;
