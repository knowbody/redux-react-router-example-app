import React, { Component, PropTypes } from 'react'
import { Avatar ,Card, CardHeader, CardMedia, CardTitle, CardText, IconMenu, MenuItem, IconButton } from 'material-ui'
import NavigationMoreVert from 'material-ui/lib/svg-icons/navigation/more-vert'
import ActionDelete from 'material-ui/lib/svg-icons/action/delete'
import SocialShare from 'material-ui/lib/svg-icons/social/share'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default class Blogpost extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired
  }

  getStyles() {
    return {
      row: {
        margin: '20px 0'
      },
      iconMenu: {
        position: 'absolute',
        right: 16,
        zIndex: 1000
      },
      cardMedia: {
        background: 'black'
      },
      cardMediaStyle: {
        maxHeight: '500px',
        textAlign: 'center'
      },
      cardMediaImage: {
        maxHeight: '500px',
        maxWidth: '100%'
      }
    }
  }

  render() {
    const { index, post } = this.props;
    const styles = this.getStyles();

    let title = <CardHeader title={post.title} subtitle={post.subtitle} avatar={post.avatar}/>;

    if (post.poster) {
      title = (
          <CardMedia style={styles.cardMedia} mediaStyle={styles.cardMediaStyle} overlay={title}>
            <div>
              <img style={styles.cardMediaImage} src={post.poster}/>
            </div>
          </CardMedia>
      );
    }

    return (
        <Row style={styles.row} ref={index}>
          <Col xs={12}>
            <Card>
              {title}
              <IconMenu style={styles.iconMenu} iconButtonElement={<IconButton><NavigationMoreVert /></IconButton>}>
                <MenuItem index={0}>Remove</MenuItem>
                <MenuItem index={1}>Share</MenuItem>
              </IconMenu>
              <CardText>{post.body}</CardText>
            </Card>
          </Col>
        </Row>
    );
  }
}