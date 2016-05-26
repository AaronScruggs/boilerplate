import React from 'react';

require("assets/styles/home.scss");

export default React.createClass({
	render: function(){
		return (
			<div className="intro">

				<p>Hello, I'm a boilerplate.</p>
				<p>I run on localhost:5000</p>

			</div>
		)
	}
})