import React from 'react';
import Search from './Search';
import Main from './Main';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
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

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">

      <Route exact path="/" render = {() => (
        <Main
          books = {this.state.books}
          moveShelf = {this.moveShelf}
        />
      )} />

      <Route exact path="/search" render = {() => (
        <Search
          moveShelf = {this.moveShelf}
          books = {this.state.books}
        />
      )} />

      </div>
    )
  }
}

export default BooksApp
