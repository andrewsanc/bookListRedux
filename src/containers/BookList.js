// Renders a list of books
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return <li key={book.title} className='list-group-item'>{book.title}</li>
    })
  }
  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => { // Takes are application state as an argument and returns props for BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);  // Returns a smart component(BookList)/ Container
