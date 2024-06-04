// USE REACT
import React, {useState} from 'react';

// INSERT COUNTER HTML
const Counter = () => {
	const [count, setCount] = useState(0);

	// INCREMENT HANDLER
	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	// DECREMENT HANDLER
	const handleDecrement = () => {
		setCount((prevCount) => prevCount - 1);
	};

	return (
		<div>
			Counter
			<div className="container">
				<div>
					<button className="btn btn-3" onClick={handleDecrement}>
						Minus 1
					</button>
					<button className="btn btn-2" onClick={handleIncrement}>
						Add 1
					</button>
					<h3 className="counter">Count is {count}</h3>
					<button
						className="btn btn-3"
						onClick={() => {
							setCount(0);
						}}>
						Reset Counter
					</button>
				</div>
			</div>
		</div>
	);
};

export default Counter;
