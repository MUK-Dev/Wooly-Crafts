import React from "react";

const row = (props) => (
	<div className="row" style={{ height: "50vh" }}>
		{props.children}
	</div>
);

export default row;
