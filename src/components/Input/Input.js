import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
	let inputElement = null;

	inputElement = (
		<div className={["input-field", classes.InputMargin].join(" ")}>
			<input
				{...props.elementConfig}
				id={props.label}
				className="validate"
				value={props.value}
				onChange={props.changed}
				required
			/>
			<label htmlFor={props.label}>{props.label}</label>
		</div>
	);

	return inputElement;
};

export default input;
