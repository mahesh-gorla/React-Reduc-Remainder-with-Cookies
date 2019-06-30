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
		console.log(this.state.text);
	}
	render() {
		return (
			<div>
				<h2 className='text-primary'>Remainders</h2>
				<br />
				<br />
				<span className='form-inline'>
					<div className='form-group mx-sm-3 mb-2'>
						<input
							type='text'
							className='form-control'
							placeholder='I have to...'
							onChange={e => this.setState({ text: e.target.value })}
						/>
						<input type='datetime-local' />
					</div>
					<button
						type='submit'
						className='btn btn-primary mb-2'
						onClick={this.props.addReminder}
					>
						Add
					</button>
				</span>
			</div>
		);
	}
}
function mapStateToProps(state) {
	console.log('state', state);
}
function mapDispatchToProps(dipatch) {
	return bindActionCreators({ addReminder }, dipatch);
}

export default connect(
	null,
	mapDispatchToProps
)(Form);
