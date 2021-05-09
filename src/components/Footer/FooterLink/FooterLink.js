import React from "react";
import classes from "./FooterLink.module.css";

const footerLink = (props) => (
	<button className={classes.FooterLink}>{props.children}</button>
);

export default footerLink;
