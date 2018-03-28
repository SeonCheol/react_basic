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

const movies = [
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
}
]


class App extends Component {

	componentWillMount()	{
		console.log("will mount");
	}

	componentDidMount()	{
		console.log("did mount");
	}

  render() {
  	console.log("did render");
    return (
      <div className="App">
       	{movies.map( (movie, index) => {
       		return <Movie title={movie.title} poster={movie.poster} key={index}/>
       	})}
      </div>
    );
  }
}

export default App;
