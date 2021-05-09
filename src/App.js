import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import ContactUs from "./containers/ContactUs/ContactUs";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import { Route } from "react-router";

function App() {
	return (
		<div className="App">
			<Layout>
				<Route path="/" exact component={Home} />
				<Route path="/contact" exact component={ContactUs} />
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
			</Layout>
		</div>
	);
}

export default App;
