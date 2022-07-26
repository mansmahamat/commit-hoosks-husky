import React from 'react';
import './App.css';
import Todo from './Todo';

function App() {
	const todos = [
		{ id: 1, title: 'Go to supermarket', completed: false },
		{ id: 2, title: 'Make dinner', completed: true },
		{ id: 2, title: 'Go to sport', completed: true },
		{ id: 2, title: 'take a nap', completed: false },
		{ id: 2, title: 'Paint the wall', completed: false },
	];

	return (
		<div className='App'>
			{todos.map((todo, index) => {
				return <Todo key={index} todo={todo} />;
			})}
			<button label='Click me' />
			<input />
		</div>
	);
}

export default App;
