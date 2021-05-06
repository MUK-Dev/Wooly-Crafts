import React, { Component } from "react";
import Row from "../../components/Row/Row";
import TwoColumnsOnLarge from "../../components/TwoColumnsOnLarge/TwoColumnsOnLarge";
import Background from "../../components/Background/Background";
import BigHeading from "../../components/BigHeading/BigHeading";
import LandingImage from "../../assets/knitting.svg";
import SizedBox from "../../components/SizedBox/SizedBox";
import "./Home.css";

class Home extends Component {
	render() {
		return (
			<div>
				<Background />
				<Row>
					<TwoColumnsOnLarge>
						<BigHeading>
							<SizedBox height="140px" width="0" />
							<div style={{ color: "#eaebed" }}>Knitted by Hand With Love</div>
						</BigHeading>
					</TwoColumnsOnLarge>
					<TwoColumnsOnLarge>
						<SizedBox height="40px" width="0" />
						<img src={LandingImage} alt="Landing" className="image3D" />
					</TwoColumnsOnLarge>
				</Row>
				<SizedBox width="0" height="100px" />
				<BigHeading>Products</BigHeading>
			</div>
		);
	}
}

export default Home;
