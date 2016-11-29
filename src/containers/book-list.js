import React,  {Component} from 'react';
import {connect} from 'react-redux';
import { Image, List } from 'semantic-ui-react';
class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <List.Item key={book.title}>
          <Image avatar src='http://semantic-ui.com/images/avatar/small/daniel.jpg' />
          <List.Content><List.Header>{book.title}</List.Header></List.Content>
        </List.Item>
      );
    });
  }
  render(){
    return (
      <List horizontal>
        {this.renderList()}
      </List>
    )
  }
}

function mapStateToProps(state){
  return{
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
