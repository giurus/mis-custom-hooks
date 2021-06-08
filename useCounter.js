import { useState } from 'react';

export const useCounter = (iniState = 10) => {
	const [counter, setCounter] = useState(iniState);
	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		setCounter(counter - 1);
	};

	const reset = () => {
		setCounter(iniState);
	};

	return {
		counter,
		increment,
		decrement,
		reset
	};
};
