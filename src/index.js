import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './component LoginForm/main-jsx';
import Cart from './componets/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = document.getElementById('root');
const formItem = React.createElement(
	'form',
	{
		className: 'login-frm'
	},
	React.createElement(
		'div',
		{
			className: 'login-frm-item'
		},
		React.createElement(
			'label',
			{
				className: 'login-frm__email',
				for: 'email'
			},
			'PassWord'
		),
		React.createElement(
			'input',
			{
				className: 'login-frm__input',
				id: 'email',
				type: 'text'
			},
			null
		)
	)
);
// ReactDOM.render(formItem, root)

root.render(
	<>
		<Cart
			title="Tan Luc"
			desc="tam tam tan luc tam tam tan luc tam tam tan luc tam tam tan luc"
		/>
		<Cart
			title="Tan Luc"
			desc="tam tam tan luc tam tam tan luc tam tam tan luc tam tam tan luc"
		/>
		<Main />
		{formItem}
	</>
);
