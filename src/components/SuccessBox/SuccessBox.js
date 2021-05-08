import React from "react";
import classes from "./SuccessBox.module.css";

const successBox = (props) => (
	<div
		className={["waves-effect", "waves-light", "btn", classes.FadeIn].join(" ")}
	>
		{props.children}
	</div>
);

export default successBox;
