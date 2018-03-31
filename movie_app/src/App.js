import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
"The Intern",
"Old Boy",
"Known Girl"
]

const movieImgs = [
"https://goodmenproject.com/wp-content/uploads/2015/09/The-Intern-new-poster.jpg",
"https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg",
"http://cfile5.uf.tistory.com/image/2578304C56B75E611E9874"

]


class App extends Component {

	state = {

	}

	componentWillMount()	{

	}

	componentDidMount()	{
		fetch(
			"http:/localhost:3000/movie_info.json",
			{
				method: 'GET',
				mode : 'cors',
				
			}
			)
		.then(res => console.log(res))
		.catch(err => console.log(err))
	}

	_renderMovies = () => {
		const movies = [this.state.movies.map((movie, index) => {
			return <Movie title={movie.title} poster={movie.poster} key={index} />
		})]
		return movies;
	}

	render() {
		console.log("did render");
		return (
			<div className="App">
			{this.state.movies ? this._renderMovies() : "Loading.."}
			</div>
			);
	}
}
export default App
