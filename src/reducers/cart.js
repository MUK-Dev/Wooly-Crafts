import * as actionTypes from "./actions";

const initialState = {
	cartItems: [],
	totalPrice: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const newItem = {
				image: action.image,
				name: action.name,
				price: action.price,
			};
			let newPrice = state.totalPrice;
			const newCartItems = [...state.cartItems];
			if (!newCartItems.some((cartItem) => cartItem.name === action.name)) {
				newCartItems.push(newItem);
				newPrice = newPrice + parseInt(action.price);
				localStorage.setItem("cartItems", JSON.stringify(newCartItems));
				localStorage.setItem("totalPrice", newPrice);
			}
			return {
				...state,
				cartItems: newCartItems,
				totalPrice: newPrice,
			};
		case actionTypes.GET_CART:
			let gotItems = [];
			let gotPrice = 0;
			if (action.cartItems.length > 0) {
				gotItems = action.cartItems;
			}
			if (action.price > 0) {
				gotPrice = parseInt(action.price);
			}
			return {
				...state,
				cartItems: gotItems,
				totalPrice: gotPrice,
			};
		case actionTypes.REMOVE_FROM_CART:
			const removingCartItems = state.cartItems.filter((cartItem) => {
				return !(cartItem.name === action.name);
			});
			let deductFromPrice = state.totalPrice - parseInt(action.price);
			localStorage.setItem("cartItems", JSON.stringify(removingCartItems));
			localStorage.setItem("totalPrice", deductFromPrice);
			return {
				...state,
				cartItems: removingCartItems,
				totalPrice: deductFromPrice,
			};
		case actionTypes.EMPTY_CART:
			localStorage.removeItem("cartItems");
			localStorage.removeItem("totalPrice");
			return {
				...state,
				cartItems: [],
				totalPrice: 0,
			};
		default:
			return state;
	}
};

export default reducer;
