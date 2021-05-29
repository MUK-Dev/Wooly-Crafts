import React, { Component } from "react";
import classes from "./ContactUs.module.css";
import Row from "../../components/Row/Row";
import TwoColumnOnLarge from "../../components/TwoColumnsOnLarge/TwoColumnsOnLarge";
import paperPlane from "../../assets/paperPlane.svg";
import SmallHeading from "../../components/SmallHeading/SmallHeading";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Input from "../../components/Input/Input";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import axios from "../../axios";

class ContactUs extends Component {
	state = {
		contactForm: {
			subject: {
				elementType: "input",
				label: "Topic",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
			name: {
				elementType: "input",
				label: "Name",
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
				label: "Contact Number",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
			message: {
				elementType: "textarea",
				label: "Message",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
		},
		showSpinner: false,
		responseMessage: null,
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedForm = { ...this.state.contactForm };
		const updatedElement = { ...updatedForm[inputIdentifier] };
		updatedElement.value = event.target.value;
		updatedForm[inputIdentifier] = updatedElement;
		this.setState({ contactForm: updatedForm });
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.setState({ showSpinner: true });
		const topic = this.state.contactForm.subject.value;
		const name = this.state.contactForm.name.value;
		const email = this.state.contactForm.email.value;
		const phone = this.state.contactForm.phone.value;
		const messageBody = this.state.contactForm.message.value;
		if (
			topic !== "" &&
			name !== "" &&
			email !== "" &&
			phone !== "" &&
			messageBody !== ""
		) {
			const message = {
				topic: topic,
				name: name,
				email: email,
				phone: phone,
				message: messageBody,
			};
			axios
				.post("/messages", message)
				.then((res) => {
					const newContactForm = { ...this.state.contactForm };
					for (let key in newContactForm) {
						newContactForm[key].value = "";
					}
					this.setState({
						responseMessage: res.data,
						showSpinner: false,
						contactForm: newContactForm,
					});
				})
				.catch((err) => {
					console.log(err);
					this.setState({
						responseMessage: "Something Went Wrong",
						showSpinner: false,
					});
				});
		}
	};

	render() {
		const formElementArry = [];
		for (let key in this.state.contactForm) {
			formElementArry.push({
				id: key,
				config: this.state.contactForm[key],
			});
		}
		return (
			<div className={classes.ContactCardBody}>
				<div className={["container card", classes.Card].join(" ")}>
					<Row>
						<TwoColumnOnLarge>
							{this.state.showSpinner ? (
								<div className={classes.ContactLoader}>
									<LoadingSpinner />
								</div>
							) : (
								<img src={paperPlane} alt="Paper Plane" />
							)}
						</TwoColumnOnLarge>
						<TwoColumnOnLarge>
							<div className={classes.ContactForm}>
								<SmallHeading>Have any Questions?</SmallHeading>
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
						</TwoColumnOnLarge>
					</Row>
				</div>
			</div>
		);
	}
}

export default ContactUs;
