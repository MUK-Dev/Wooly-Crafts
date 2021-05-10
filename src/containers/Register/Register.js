import React, { Component } from "react";
import classes from "./Register.module.css";
import SmallHeading from "../../components/SmallHeading/SmallHeading";
import handshake from "../../assets/handshake.svg";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

class Register extends Component {
	state = {
		registerForm: {
			name: {
				elementType: "input",
				label: "Full Name",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
			email: {
				elementType: "input",
				label: "Email",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
			phone: {
				elementType: "input",
				label: "Phone Number",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
			password: {
				elementType: "input",
				label: "Password",
				elementConfig: {
					type: "password",
				},
				value: "",
			},
			confirmPassword: {
				elementType: "input",
				label: "Confirm Password",
				elementConfig: {
					type: "password",
				},
				value: "",
			},
		},
		showSpinner: false,
		showSuccessBox: false,
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedForm = { ...this.state.registerForm };
		const updatedElement = { ...updatedForm[inputIdentifier] };
		updatedElement.value = event.target.value;
		updatedForm[inputIdentifier] = updatedElement;
		this.setState({ registerForm: updatedForm });
	};

	submitHandler = (event) => {
		event.preventDefault();
	};

	render() {
		const formElementArry = [];
		for (let key in this.state.registerForm) {
			formElementArry.push({
				id: key,
				config: this.state.registerForm[key],
			});
		}
		return (
			<div className={classes.RegisterFormBody}>
				<div className={["card container", classes.Card].join(" ")}>
					<div className={classes.HeadingBG}>
						<img src={handshake} alt="HandShake" />
						<SmallHeading>Register</SmallHeading>
					</div>
					<form onSubmit={(event) => this.submitHandler(event)}>
						{formElementArry.map((element) => {
							return (
								<Input
									key={element.id}
									elementType={element.config.elementType}
									elementConfig={element.config.elementConfig}
									value={element.config.value}
									label={element.config.label}
									changed={(event) =>
										this.inputChangedHandler(event, element.id)
									}
								/>
							);
						})}
						<SubmitButton>Submit</SubmitButton>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
