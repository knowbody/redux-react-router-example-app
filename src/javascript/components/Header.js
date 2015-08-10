import React, { PropTypes, Component } from 'react';
import { AppBar, IconButton, Styles } from 'material-ui';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import NavigationMoreVert from 'material-ui/lib/svg-icons/navigation/more-vert';
import ActionAccountCicle
from 'material-ui/lib/svg-icons/action/account-circle';
import SocialGithub from '../../images/GitHub-Mark-Light-120px-plus.png';


export default class Header extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  getStyles() {
    return {
      iconButton: {
        color: Styles.Colors.white
      },
      link: {
        display: 'inline-block',
        height: 48,
        width: 48,
        textAlign: 'center'
      },
      image: {
        height: 24,
        width: 24
      }
    };
  }

  render() {
    const { router } = this.context;
    const styles = this.getStyles();

    const iconElementRight = (
        <div>
          <a style={styles.link}
             href='https://github.com/knowbody/redux-react-router-example-app'
             target='_blank'>
            <image style={styles.image} src={SocialGithub} />
          </a>
          <IconMenu style={styles.iconMenu}
                    iconButtonElement={
                      <IconButton>
                        <NavigationMoreVert color='white' />
                      </IconButton>
                    }>
            <MenuItem leftIcon={<ActionAccountCicle />} primaryText='Login'
                      onTouchTap={() => router.transitionTo('login')} />
          </IconMenu>
        </div>
    );

    return (
        <AppBar title='(redux, reactRouter) => example'
                iconElementLeft={<span />}
                iconElementRight={iconElementRight} />

    );
  }
}
