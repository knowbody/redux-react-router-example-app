import React, { Component, PropTypes } from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText,
    IconButton
} from 'material-ui';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import NavigationMoreVert from 'material-ui/lib/svg-icons/navigation/more-vert';
import EditorModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';
import SocialShare from 'material-ui/lib/svg-icons/social/share';

export default class Blogpost extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      editPost: PropTypes.func,
      removePost: PropTypes.func
    }).isRequired,
    index: PropTypes.number.isRequired,
    post: PropTypes.object.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    muiTheme: PropTypes.object
  }

  getStyles() {
    return {
      card: {
        position: 'relative',
        marginTop: 10,
        marginBottom: 20
      },
      iconMenu: {
        position: 'absolute',
        top: 12,
        right: 16,
        zIndex: 5
      },
      cardMedia: {
        marginTop: 20,
        background: 'black',
        minHeight: 100
      },
      cardMediaStyle: {
        maxHeight: '500px',
        textAlign: 'center'
      },
      cardMediaImage: {
        maxHeight: '500px',
        maxWidth: '100%'
      }
    };
  }

  render() {
    const { router } = this.context;
    const { actions, post } = this.props;
    const styles = this.getStyles();

    let title = <CardTitle title={post.title} subtitle={post.subtitle}/>;

    if (post.poster) {
      title = (
          <CardMedia style={styles.cardMedia}
                     mediaStyle={styles.cardMediaStyle}
                     overlay={title}>
            <div>
              <img style={styles.cardMediaImage} src={post.poster}/>
            </div>
          </CardMedia>
      );
    }

    return (
        <Card style={styles.card}>
          <CardHeader title={post.user.username} avatar={post.user.avatar}>
            <IconMenu style={styles.iconMenu}
                      iconButtonElement={
                        <IconButton><NavigationMoreVert /></IconButton>
                      }>
              <MenuItem leftIcon={<EditorModeEdit />} primaryText='Edit'
                        onTouchTap={() => router.transitionTo(`/post/${post.id}/edit`)}/>
              <MenuItem leftIcon={<ActionDelete />} primaryText='Remove'
                        onTouchTap={actions.removePost.bind(null, post)}/>
              <MenuItem leftIcon={<SocialShare />} primaryText='Share'/>
            </IconMenu>
          </CardHeader>
          {title}
          { post.body ? <CardText>{post.body}</CardText> : '' }
        </Card>
    );
  }
}
