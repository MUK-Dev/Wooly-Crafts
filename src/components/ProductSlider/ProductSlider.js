import React from "react";
import "./ProductSlider.css";

const productSlider = (props) => (
	<div className="column">
		<div id="slide-wrapper">
			<div id="slider">
				{props.images.map((img) => {
					return (
						<img
							key={img}
							className="thumbnail active"
							src={`http://192.168.18.44:5000/${img}`}
							alt="Product Img"
						/>
					);
				})}
			</div>
		</div>
		<img
			id="featured"
			src={`http://192.168.18.44:5000/${props.images[0]}`}
			alt="Product Img"
		/>
	</div>
);

export default productSlider;
