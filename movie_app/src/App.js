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
  render() {
    return (
      <div className="App">
       	<Movie title={movieTitles[0]} poster={movieImgs[0]}/>
       	<Movie title={movieTitles[1]} poster={movieImgs[1]}/>
       	<Movie title={movieTitles[2]} poster={movieImgs[2]}/>
      </div>
    );
  }
}

export default App;
