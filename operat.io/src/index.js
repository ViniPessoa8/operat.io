import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game'

function App(){
	return (
		<div className='game'>
			<Game />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));