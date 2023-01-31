import React from 'react';
// import { useAppDispatch } from './store/config';
// import { UserService } from './services/userService';
import Counter from './screens/Counter';
import Todo from './screens/Todo';

function App() {
	// const dispatch = useAppDispatch();

	// const getUser = async () => {
	// 	dispatch(UserService.getUser('1'));
	// };

	return (
		<>
			<Counter />
			<hr />
			<Todo />
		</>
	);
}

export default App;
