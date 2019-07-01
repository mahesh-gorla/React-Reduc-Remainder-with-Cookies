import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, removeReminder } from '../actions';
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
			<ol className='bg-primary'>
				{reminders.map(reminder => {
					return (
						<li key={reminder.id} className='mb-2'>
							<div className='list-item ' style={{ float: 'left' }}>
								{reminder.text}
							</div>
							<div
								className='list-item delete-button text-danger'
								onClick={() => {
									this.removeReminder(reminder.id);
								}}
								style={{
									display: 'inline-block',
									float: 'right'
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
		console.log('deleting in application id', id);
		console.log('this.props', this.props);
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
	return bindActionCreators({ addReminder, removeReminder }, dispatch);
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);
