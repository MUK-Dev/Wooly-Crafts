import React, { Component } from "react";
import Row from "../../components/Row/Row";
import TwoColumnsOnLarge from "../../components/TwoColumnsOnLarge/TwoColumnsOnLarge";
import Background from "../../components/Background/Background";
import BigHeading from "../../components/BigHeading/BigHeading";
import LandingImage from "../../assets/knitting.svg";
import SizedBox from "../../components/SizedBox/SizedBox";
import "./Home.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import FourColumnOnLarge from "../../components/FourColumnOnLarge/FourColumnOnLarge";
import Center from "../../components/Center/Center";

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
					<div>
						<TwoColumnsOnLarge>
							<SizedBox height="40px" width="0" />
							<img
								src={LandingImage}
								alt="Landing"
								className="image3D hide-on-small-only"
							/>
						</TwoColumnsOnLarge>
					</div>
				</Row>
				<SizedBox width="0" height="100px" />
				<BigHeading>Products</BigHeading>
				<Center>
					<Row>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
					</Row>
				</Center>

				<SizedBox width="0" height="60px" />
			</div>
		);
	}
}

export default Home;
