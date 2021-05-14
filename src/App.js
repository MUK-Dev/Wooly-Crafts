import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import ContactUs from "./containers/ContactUs/ContactUs";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import { Route } from "react-router";
import Products from "./containers/Products/Products";
import Product from "./containers/Product/Product";
import Checkout from "./containers/Checkout/Checkout";

function App() {
	return (
		<div className="App">
			<Layout>
				<Route path="/" exact component={Home} />
				<Route path="/contact" exact component={ContactUs} />
				<Route path="/checkout" exact component={Checkout} />
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/products" exact component={Products} />
				<Route path="/products/product" exact component={Product} />
			</Layout>
		</div>
	);
}

export default App;
