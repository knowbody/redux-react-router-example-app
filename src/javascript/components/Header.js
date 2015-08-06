import React, { PropTypes, Component } from 'react'
import { AppBar, IconButton, FlatButton } from 'material-ui'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import GithubLogo from '../../images/GitHub-Mark-Light-120px-plus.png'

export default class Header extends Component {
  render() {
    const githubLink = (
        <a style={styles.link} href="https://github.com/knowbody/redux-react-router-example-app">
          <image style={styles.image} src={GithubLogo} />
        </a>
    );

    return (
        <AppBar
            title="(redux, reactRouter) => example"
            iconElementLeft={<span />}
            iconElementRight={githubLink}/>

    );
  }
}

let styles = {
  link: {
    display: 'inline-block',
    height: 48,
    width: 48,
    textAlign: 'center'
  },
  image: {
    height: 24,
    width: 24,
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  }
};