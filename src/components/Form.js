import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';
import { bindActionCreators } from 'redux';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}
	addReminder() {
		this.props.addReminder(this.state.text);
	}
	renderReminders() {
		const reminders = this.props.reminders;
		return (
			<ul className='mb-2'>
				{reminders.map(reminder => {
					return (
						<li className='bg-primary mb-2' key={reminder.id}>
							<div>{reminder.text}</div>
						</li>
					);
				})}
			</ul>
		);
	}
	render() {
		console.log('this.props', this.props);
		return (
			<div style={{ backgroundColor: 'bg-light' }}>
				<h1 className='text-info mb-2'>Reminder Pro.</h1>
				<input
					class='form-control'
					type='text'
					placeholder='Enter your reminder...'
					readonly
					onChange={e => this.setState({ text: e.target.value })}
				/>
				<button
					type='button'
					className='btn btn-primary btn-sm m-3'
					onClick={() => this.addReminder()}
				>
					ADD
				</button>
				<button
					type='button'
					className='btn btn-secondary bg-danger btn-sm m-3'
				>
					Clear All
				</button>
				{this.renderReminders()}
			</div>
		);
	}
}
function mapStateToProps(state) {
	console.log('state', state);
	return {
		reminders: state
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addReminder }, dispatch);
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
