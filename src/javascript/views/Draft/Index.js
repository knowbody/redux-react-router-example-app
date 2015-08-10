import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBar from '../../containers/AppBar'
import { Avatar, Paper, TextField, RaisedButton } from 'material-ui'
import * as BlogActions from '../../actions/BlogActions'

class BlogApp extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    blogposts: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  getStyles() {
    return {
      paper: {
        padding: 20
      },
      form: {
        margin: 0
      },
      textField: {
        width: '100%'
      },
      submit: {
        float: 'right',
        marginTop: 10
      }
    }
  }

  onSubmit(action, payload) {
    const { router } = this.context;

    event.preventDefault();

    action(payload);
    router.transitionTo('/');
  }

  render() {
    const { draft, dispatch } = this.props;
    const { updateDraft, addPost } = bindActionCreators(BlogActions, dispatch);
    const styles = this.getStyles();

    return (
        <AppBar>
          <Paper style={styles.paper}>
            <form style={styles.form} onChange={event => updateDraft({ [event.target.name]: event.target.value })}
                  onSubmit={this.onSubmit.bind(this, addPost, draft)}>
              <TextField name="title" style={styles.textField} hintText="title" floatingLabelText="title"
                         value={draft.title}/>
              <TextField name="subtitle" style={styles.textField} hintText="subtitle" floatingLabelText="subtitle"
                         value={draft.subtitle}/>
              <TextField name="poster" style={styles.textField} hintText="poster url" floatingLabelText="poster url"
                         value={draft.poster}/>
              <TextField name="body" style={styles.textField} hintText="whats this about...?"
                         floatingLabelText="whats this about...?" value={draft.body} multiLine={true}/>
              <RaisedButton type="submit" style={styles.submit} label="Publish" primary={true}/>

              <div style={{ clear: 'both' }}/>
            </form>
          </Paper>
        </AppBar>
    );
  }
}

export default connect(state => ({draft: state.draft}))(BlogApp);