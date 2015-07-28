import React, { PropTypes } from 'react';
import Header from './Header';
import Blogpost from './Blogpost';
import Footer from './Footer';

export default class Main {
  static propTypes = {
    blogposts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    let { blogposts } = this.props;

    blogposts = blogposts.map((post, i) =>
      <Blogpost key={i} post={post} index={i} />
    );

    return (
      <div style={styles.main}>
        <Header />
        <div>
          {blogposts}
        </div>
        <Footer />
      </div>
    );
  }
}

let styles = {
  main: {
    fontFamily: 'Lato'
  }
}
