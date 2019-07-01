import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from '../constants';

export const addReminder = (text, dueDate) => {
	return {
		type: ADD_REMINDER,
		text: text,
		dueDate: dueDate
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

export const clearReminders = () => {
	return {
		type: CLEAR_REMINDER
	};
};
