import React from 'react';
import './style.css';

class Game extends React.Component {
	constructor (props) {
		super(props);

		const max_num = 10;

		let x = Math.floor((Math.random() * max_num) + 1);
		let y = Math.floor((Math.random() * max_num) + 1);
		let r = x + y;
	
		this.state = {
			op1: x,
			op2: y,
			result: r,
		}
	}

	check_winner(e){
		let res = e.target.value;
		let op2 = this.state.op2.toString();

		if (res === op2) {
			console.log("Ganhou");
		}
	}

	render_question (){
		return (
			<div className='box-container' >
				<div className='num1-container txt'>{this.state.op1}</div>
				<div className="op">
					<p>+</p>
				</div>
				<input className='txt input-container ' onChange={this.check_winner.bind(this)}/>
				<div className='op'>
					<p>=</p>
				</div>
				<div className='result-container txt'>{this.state.result}</div>
			</div>
		);
	}

	render () {
		return (
			<div className='main-container' onLoad={this.generate_question}>
				<div className='box'>
					{this.render_question()}
				</div>
    		</div>
		);
	}
}

export default Game;