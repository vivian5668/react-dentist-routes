import React from 'react';

const Procedures = (props) => {
	//creating out list items for dental operations
	const jsxOps = props.ops.map((procedure, index) => {
		 return <li key={index}> {procedure} </li>
	})

	return (
		<div>
			<h1> Procedures </h1>
			<p>
				Here at Dentist Office we're committed to taking care of all your dental needs. Check out our contact page to see where we're located and find our phone number and email address. Check out our procedures page to find out what sort of dental work you can get done today.
			</p>
			<ul>
				{jsxOps}
			</ul>
		</div>
	)
}

export default Procedures