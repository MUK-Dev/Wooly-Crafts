import React, { Component } from "react";
import classes from "./Register.module.css";
import SmallHeading from "../../components/SmallHeading/SmallHeading";
import handshake from "../../assets/handshake.svg";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import axios from "../../axios";
import { connect } from "react-redux";
import * as actionTypes from "../../reducers/actions";

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
		responseMessage: "",
	};

	inputChangedHandler = (event, inputIdentifier) => {
		if (this.state.responseMessage !== "") {
			this.setState({ responseMessage: "" });
		}
		const updatedForm = { ...this.state.registerForm };
		const updatedElement = { ...updatedForm[inputIdentifier] };
		updatedElement.value = event.target.value;
		updatedForm[inputIdentifier] = updatedElement;
		this.setState({ registerForm: updatedForm });
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.setState({ showSpinner: true });
		const name = this.state.registerForm.name.value;
		const phone = this.state.registerForm.phone.value;
		const email = this.state.registerForm.email.value;
		const password = this.state.registerForm.password.value;
		const confirmPassword = this.state.registerForm.confirmPassword.value;

		if (password === confirmPassword) {
			if (password !== "" && confirmPassword !== "") {
				if (name !== "" && phone !== "" && email !== "") {
					const credentials = {
						name: name,
						email: email,
						phone: phone,
						password: password,
					};
					axios
						.post("/register", credentials)
						.then((res) => {
							console.log(res);
							this.setState({
								responseMessage: res.data.message,
								showSpinner: false,
							});
							this.props.storeUser(res.data.userInfo, res.data.token);
							this.props.history.goBack();
						})
						.catch((err) => {
							console.log(err);
							this.setState({
								responseMessage: "Something Went Wrong...",
								showSpinner: false,
							});
						});
				}
			}
		} else {
			this.setState({ responseMessage: "Passwords Don't Match" });
		}
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
						{this.state.responseMessage ? (
							<SmallHeading>{this.state.responseMessage}</SmallHeading>
						) : (
							<SubmitButton>Submit</SubmitButton>
						)}
					</form>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		storeUser: (user, token) =>
			dispatch({ type: actionTypes.GET_USER, user: user, token: token }),
	};
};

export default connect(null, mapDispatchToProps)(Register);
