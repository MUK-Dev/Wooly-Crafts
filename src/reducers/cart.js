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
			}
			return {
				...state,
				cartItems: newCartItems,
				totalPrice: newPrice,
			};
		case actionTypes.REMOVE_FROM_CART:
			const removingCartItems = state.cartItems.filter((cartItem) => {
				return !(cartItem.name === action.name);
			});
			let deductFromPrice = state.totalPrice - parseInt(action.price);
			return {
				...state,
				cartItems: removingCartItems,
				totalPrice: deductFromPrice,
			};
		case actionTypes.EMPTY_CART:
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
