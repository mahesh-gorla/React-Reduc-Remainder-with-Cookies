import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, removeReminder, clearReminders } from '../actions';
import { bindActionCreators } from 'redux';
import moment from 'moment';
class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			dueDate: ''
		};
	}
	addReminder() {
		this.props.addReminder(this.state.text, this.state.dueDate);
	}
	renderReminders() {
		const reminders = this.props.reminders;
		return (
			<ol className='bg-primary'>
				{reminders.map(reminder => {
					return (
						<li key={reminder.id}>
							<div className='list-item ' style={{ float: 'left' }}>
								<span style={{ marginBottom: '2px' }}>{reminder.text}</span>
							</div>
							<div>
								<em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
							</div>
							<div
								className='list-item delete-button text-danger'
								onClick={() => {
									this.removeReminder(reminder.id);
								}}
								style={{
									display: 'inline-block',
									float: ''
								}}
							>
								&#x2715;
							</div>
						</li>
					);
				})}
			</ol>
		);
	}
	removeReminder(id) {
		this.props.removeReminder(id);
	}
	clearReminders() {
		this.props.clearReminders();
	}
	render() {
		console.log('this.props', this.props);
		return (
			<div style={{ backgroundColor: 'bg-light' }}>
				<h1 className='text-info mb-2'>Reminder Pro.</h1>
				<input
					className='form-control'
					type='text'
					placeholder='Enter your reminder...'
					onChange={e => this.setState({ text: e.target.value })}
				/>
				<input
					className='form-control mt-2'
					type='datetime-local'
					onChange={e => this.setState({ dueDate: e.target.value })}
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
					onClick={() => this.clearReminders()}
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
	return bindActionCreators(
		{ addReminder, removeReminder, clearReminders },
		dispatch
	);
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
