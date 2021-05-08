/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classes from "./SideNavTrigger.module.css";

const sideNavTrigger = () => (
	<a
		href="#"
		data-target="mobile-demo"
		className="sidenav-trigger show-on-large"
	>
		<svg
			className={classes.NavTrigger}
			viewBox="0 0 120 100"
			width="50"
			height="60"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="triangles">
				<g className={classes.DarkGroup}>
					<path
						className={classes.Dark1}
						d="M70.2285 48.2943C71.5688 49.0519 71.5863 50.9763 70.2601 51.7582L35.9433 71.9909C34.6171 72.7728 32.9417 71.8258 32.9276 70.2863L32.564 30.4508C32.55 28.9113 34.2078 27.9338 35.5481 28.6914L70.2285 48.2943Z"
					/>
					<path
						className={classes.Dark3}
						d="M49.2285 48.2943C50.5688 49.0519 50.5864 50.9763 49.2601 51.7582L14.9434 71.9909C13.6171 72.7728 11.9418 71.8258 11.9277 70.2863L11.5641 30.4508C11.55 28.9113 13.2078 27.9338 14.5481 28.6914L49.2285 48.2943Z"
					/>
				</g>
				<g className={classes.LightGroup}>
					<path
						className={classes.Light1}
						d="M48.738 48.0514C50.0783 48.8089 50.0957 50.7333 48.7694 51.5154L14.8138 71.537C13.4875 72.3191 11.8122 71.3722 11.7982 69.8327L11.4417 30.4182C11.4278 28.8787 13.0856 27.9011 14.4259 28.6586L48.738 48.0514Z"
					/>
				</g>
			</g>
		</svg>
	</a>
);

export default sideNavTrigger;
