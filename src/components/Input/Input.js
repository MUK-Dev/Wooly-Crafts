import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
	let inputElement = null;
	switch (props.elementType) {
		case "input":
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
			break;
		case "textarea":
			inputElement = (
				<div className={["input-field", classes.InputMargin].join(" ")}>
					<textarea
						{...props.elementConfig}
						id={props.label}
						className="materialize-textarea"
						value={props.value}
						style={{ height: "170px" }}
						onChange={props.changed}
						required
					/>
					<label htmlFor={props.label}>{props.label}</label>
				</div>
			);
			break;
		case "inputSearch":
			inputElement = (
				<div
					className={["input-field", classes.InputMargin].join(" ")}
					style={{ width: "50%", margin: "20px auto" }}
				>
					<input
						{...props.elementConfig}
						id={props.label}
						value={props.value}
						onChange={props.changed}
						className="white-text"
					/>
					<label htmlFor={props.label}>{props.label}</label>
				</div>
			);
			break;

		default:
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
			break;
	}

	return inputElement;
};

export default input;
