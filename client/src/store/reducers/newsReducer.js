// this function takes oldstate and action
export default function newsReducer(state = {}, action) {
	switch (action.type) {
		case'get_news':
		return {...state,...action.payload} 
		//if the type is get_news in action then we put oldstate+action.payload in state
		default:
			return state;
	}
}