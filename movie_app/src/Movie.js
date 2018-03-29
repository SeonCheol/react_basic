import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import registerServiceWorker from './registerServiceWorker';


function Movie({title, poster})	{
	return (
		<div>
		<MoviePoster poster={poster}/>
		<h1>{title}</h1>
		</div>
		)
	
}



function MoviePoster({poster})	{
	return	(
		<img src={poster}/>
		)
}

Movie.propTypes = {
	title : PropTypes.string.isRequired,
	poster : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
	poster : PropTypes.string.isRequired
}



export default Movie;