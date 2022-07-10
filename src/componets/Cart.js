import React from 'react';

class Cart extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			// cu phap mac dinh cua State
			color: 'red'
		};
	}
	handleClick() {
		this.setState({
			color: 'green'
		});
	}

	render() {
		// setTimeout(() =>{
		//     this.setState({ //cu phap mac dinh cua State
		//         demoState : "hello"
		//     })
		// },2000)

		return (
			<React.Fragment>
				<h1>{this.props.title}</h1>
				<div>{this.props.desc}</div>
				<div>{this.state.demoState}</div>
				<div
					style={{
						color: this.state.color
					}}
				>
					lorem loremloremlorem loremloremloremlorem loremlorem lorem
					loremloremlorem loremloremloremlorem loremlorem lorem loremloremlorem
					loremloremloremlorem loremlorem
				</div>
				<button onClick={this.handleClick}>Click de doi mau</button>
			</React.Fragment>
		);
	}
}

export default Cart;
