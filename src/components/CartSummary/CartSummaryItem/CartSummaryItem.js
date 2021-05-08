import React from "react";
import Row from "../../Row/Row";
import Center from "../../Center/Center";

const cartSummaryItem = (props) => (
	<Center>
		<div
			className="row"
			style={{ padding: "5px", marginBottom: "0", marginTop: "0" }}
		>
			<p
				className="col s6"
				style={{ marginBottom: "5px", marginTop: "5px", height: "25px" }}
			>
				<b>{props.right}</b>
			</p>
			<p
				className="col s6"
				style={{ marginBottom: "5px", marginTop: "5px", height: "25px" }}
			>
				{props.left}
			</p>
		</div>
	</Center>
);

export default cartSummaryItem;
