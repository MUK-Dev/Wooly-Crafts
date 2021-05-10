import React from "react";
import FooterBG from "./FooterBG/FooterBG";
import Row from "../Row/Row";
import TwoColumnOnLarge from "../TwoColumnsOnLarge/TwoColumnsOnLarge";
import FooterLogo from "../FooterLogo/FooterLogo";
import FooterLink from "./FooterLink/FooterLink";

const footer = () => (
	<div>
		<FooterBG />
		<Row>
			<div
				className="center-align container"
				style={{ zIndex: "10", color: "#eaebed" }}
			>
				<TwoColumnOnLarge>
					<FooterLogo />
				</TwoColumnOnLarge>
				<TwoColumnOnLarge>
					<div style={{ padding: "22px" }}>
						<FooterLink path="/">Home</FooterLink>
						<br />
						<FooterLink path="/contact">Contact Us</FooterLink>
						<br />
						<FooterLink path="/collections">Collection</FooterLink>
						<br />
					</div>
				</TwoColumnOnLarge>
			</div>
		</Row>
	</div>
);

export default footer;
