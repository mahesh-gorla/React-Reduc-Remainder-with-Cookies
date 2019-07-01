import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from '../constants';

export const addReminder = text => {
	return {
		type: ADD_REMINDER,
		text: text
	};
};

export const removeReminder = () => {
	return {
		type: REMOVE_REMINDER
	};
};

// export const clearReminder = () => {
// 	return {
// 		type: CLEAR_REMINDER
// 	};
// };
