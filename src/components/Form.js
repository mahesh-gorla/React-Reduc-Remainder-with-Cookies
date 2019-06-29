import React, { Component } from 'react';

export default class Form extends Component {
	render() {
		return (
			<div>
				<form className='form-inline' onSubmit={e => e.preventDefault()}>
					<div className='form-group mb-2'>
						<label for='staticEmail2' className='sr-only'>
							Remainder
						</label>
					</div>
					<div className='form-group mx-sm-3 mb-2'>
						<label for='inputPassword2' className='sr-only'>
							Password
						</label>
						<input
							type='password'
							className='form-control'
							id='inputPassword2'
							placeholder='Remainder'
						/>
					</div>
					<button type='submit' className='btn btn-primary mb-2'>
						Add
					</button>
				</form>
			</div>
		);
	}
}
