import React, { Component } from 'react';

function NumberList(props){
	const numbers = props.numbers;
	const ListItems = numbers.map((number) => 
		<ListItem key={number.toString()} 
							value={number} />
	);
}