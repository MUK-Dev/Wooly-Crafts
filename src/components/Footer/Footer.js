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
					<div style={{ padding: "30px" }}>
						<FooterLink path="/">HOME</FooterLink>
						<br />
						<FooterLink path="/contact">CONTACT US</FooterLink>
						<br />
						<FooterLink path="/products">ALL PRODUCTS</FooterLink>
						<br />
					</div>
				</TwoColumnOnLarge>
			</div>
		</Row>
	</div>
);

export default footer;
