import React from "react";
import classes from "./BigHeading.module.css";

const bigHeading = (props) => (
	<h3
		className={[classes.BigHeading, "center-align"].join(" ")}
		style={{ margin: "0", padding: "20px" }}
	>
		{props.children}
	</h3>
);

export default bigHeading;
