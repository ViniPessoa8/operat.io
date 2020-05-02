import React from 'react';
import './style.css';

class Game extends React.Component {
	render () {
		return (
			<div className='main-container'>
				<div className='inner-box'>
					<div className='box-container'>
						<div className='num1-container txt'>1304</div>
						<div className="op">+</div>
						<input className='txt input-container ' />
						<div className='op'>=</div>
						<div className='result-container txt'>13040</div>
						<button className='txt btn-calculate'>Calcular</button>
					</div>
				</div>
    	</div>
		);
	}
}

export default Game;