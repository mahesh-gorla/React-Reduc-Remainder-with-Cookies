/* eslint-disable no-fallthrough */
import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from '../constants';
// import { bake_cookie, read_cookie } from 'sfcookies';
const reminder = action => {
	return {
		text: action.text,
		dueDate: action.dueDate,
		id: Math.random()
	};
};
const removeById = (state = [], id) => {
	const reminders = state.filter(reminder => reminder.id !== id);
	console.log('new reduced reminder', reminders);
	return reminders;
};
const reminders = (state = [], action) => {
	let reminders = null;
	// state = read_cookie('reminders');
	switch (action.type) {
		case ADD_REMINDER:
			reminders = [...state, reminder(action)];
			console.log('reminders as state', reminders);
			// bake_cookie('reminders', reminders);
			return reminders;
		case REMOVE_REMINDER:
			reminders = removeById(state, action.id);
			return reminders;
		case CLEAR_REMINDER:
			reminders = [];
			return reminders;
		default:
			return state;
	}
};
export default reminders;
