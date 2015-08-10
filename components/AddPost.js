import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/BlogActions';

class AddPost extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      title: '',
      intro: '',
      body: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e) {
    const { title, intro, body } = this.state;
    const { dispatch } = this.props;
    if (title && intro && body) {
      dispatch(addPost(title, intro, body));

      this.setState({
        title: '',
        intro: '',
        body: ''
      });

    } else {
      {/* some kind of validation message */}
    }
  }

  render() {
    return (
      <div style={styles.layout}>
        <h2>Add new blogpost</h2>
        <input type='text' name='title' placeholder='title' onChange={this.handleChange} value={this.state.title} />
        <input type='text' name='intro' placeholder='intro' onChange={this.handleChange} value={this.state.intro} />
        <textarea placeholder='body' name='body' onChange={this.handleChange} value={this.state.body} />

        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

let styles = {
  layout: {
    padding: '5% 20% 5% 20%'
  }
}

export default connect()(AddPost);
