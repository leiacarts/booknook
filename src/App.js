import React from 'react';
import Search from './Search';
import Main from './Main';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //fetches books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Main
          books = {this.state.books}
        />
      </div>
    )
  }
}

export default BooksApp
