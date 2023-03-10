import React, { useState, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/config';
import { setCounter } from '../store/slices/counterSlice';

function Counter() {
	const { value } = useAppSelector((state) => state.counter);
	const dispatch = useAppDispatch();

	const onIncrease = useCallback(() => {
		dispatch(setCounter(value + 1));
	}, [dispatch, value]);

	const onDecraese = useCallback(() => {
		dispatch(setCounter(value - 1));
	}, [dispatch, value]);

	return (
		<>
			<div>
				<h1>{value}</h1>
				<div>
					<button onClick={onIncrease}>+</button>
					<button onClick={onDecraese}>-</button>
				</div>
			</div>
		</>
	);
}

export default Counter;
