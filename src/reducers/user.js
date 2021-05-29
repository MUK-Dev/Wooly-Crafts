import * as actionTypes from "./actions";

const initialState = {
	currentUser: null,
	token: null,
	validated: false,
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_USER:
			const tokenExpiration = new Date(new Date().getTime() + 2000 * 60 * 60);
			localStorage.setItem("token", action.token);
			localStorage.setItem("userData", JSON.stringify(action.user));
			localStorage.setItem("expiration", tokenExpiration);
			return {
				...state,
				currentUser: action.user,
				token: action.token,
				validated: true,
			};
		case actionTypes.GET_TOKEN:
			return {
				...state,
				token: action.token,
				currentUser: action.user,
				validated: true,
			};
		case actionTypes.LOGOUT:
			localStorage.removeItem("token");
			localStorage.removeItem("userData");
			localStorage.removeItem("expiration");
			return {
				...state,
				token: null,
				currentUser: null,
				validated: false,
			};
		default:
			return {
				...state,
			};
	}
};

export default user;
