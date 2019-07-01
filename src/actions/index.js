import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from '../constants';

export const addReminder = text => {
	return {
		type: ADD_REMINDER,
		text: text
	};
};

export const removeReminder = id => {
	const action = {
		type: REMOVE_REMINDER,
		id
	};
	console.log('deleting in action', action);
	return action;
};

// export const clearReminder = () => {
// 	return {
// 		type: CLEAR_REMINDER
// 	};
// };
