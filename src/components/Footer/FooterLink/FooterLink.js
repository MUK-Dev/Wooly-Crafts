import React from "react";
import classes from "./FooterLink.module.css";
import { Link } from "react-router-dom";

const footerLink = (props) => (
	<Link to={props.path} className={classes.FooterLink}>
		{props.children}
	</Link>
);

export default footerLink;
