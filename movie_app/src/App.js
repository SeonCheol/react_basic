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
		setTimeout(()	=>{
			this.setState({
				greeting : "Hello!",
				movies : [
				{
					title: "the Intern",
					poster: "https://goodmenproject.com/wp-content/uploads/2015/09/The-Intern-new-poster.jpg",
				},
				{
					title: "Old Boy",
					poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
				},
				{
					title: "Known Girl",
					poster: "http://cfile5.uf.tistory.com/image/2578304C56B75E611E9874"
				},
				{
					title: "Love 911",
					poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQltX-WDtmG8LUaqqeWvpvcOQSG4OKGjjiBk5TU88fufL3BQnSDgA"
				}
				]
			})
		}, 5000)
	}

	componentDidMount()	{
		console.log("did mount");
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
