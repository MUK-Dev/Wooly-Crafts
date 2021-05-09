import React, { Component } from "react";
import classes from "./Login.module.css";
import SmallHeading from "../../components/SmallHeading/SmallHeading";
import handshake from "../../assets/handshake.svg";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

class Login extends Component {
	state = {
		loginForm: {
			email: {
				elementType: "input",
				label: "Email",
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
		},
		showSpinner: false,
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedForm = { ...this.state.loginForm };
		const updatedElement = { ...updatedForm[inputIdentifier] };
		updatedElement.value = event.target.value;
		updatedForm[inputIdentifier] = updatedElement;
		this.setState({ loginForm: updatedForm });
	};

	submitHandler = (event) => {
		event.preventDefault();
	};

	render() {
		const formElementArry = [];
		for (let key in this.state.loginForm) {
			formElementArry.push({
				id: key,
				config: this.state.loginForm[key],
			});
		}
		return (
			<div className={classes.LoginFormBody}>
				<div className={["card container", classes.Card].join(" ")}>
					<img src={handshake} alt="HandShake" />
					<SmallHeading>Login</SmallHeading>
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

export default Login;
