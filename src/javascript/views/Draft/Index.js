import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from '../../containers/AppBar';
import { Paper, TextField, RaisedButton } from 'material-ui';
import * as BlogActions from '../../actions/BlogActions';

class Draft extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    draft: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  onSubmit(actions, payload) {
    event.preventDefault();

    const { router } = this.context;
    const { params } = this.props;
    const isEdit = router.isActive(`/post/${params.id}/edit`);

    isEdit
        ? actions.updatePost(payload)
        : actions.createPost(payload);

    router.transitionTo('/');
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
    };
  }

  render() {
    const { router } = this.context;
    const { draft, dispatch, params } = this.props;
    const actions = bindActionCreators(BlogActions, dispatch);
    const { updateDraft } = actions;
    const styles = this.getStyles();

    const isEdit = router.isActive(`/post/${params.id}/edit`);

    const form = (
        <form style={styles.form}
              onChange={({ target }) => {
                updateDraft({ [target.name]: target.value });
              }}
              onSubmit={this.onSubmit.bind(this, actions, draft)}>
          <TextField name='title'
                     style={styles.textField}
                     hintText='title'
                     floatingLabelText='title'
                     value={draft.title}/>
          <TextField name='subtitle'
                     style={styles.textField}
                     hintText='subtitle'
                     floatingLabelText='subtitle'
                     value={draft.subtitle}/>
          <TextField name='poster'
                     style={styles.textField}
                     hintText='poster url'
                     floatingLabelText='poster url'
                     value={draft.poster}/>
          <TextField name='body' style={styles.textField}
                     hintText='whats this about...?'
                     floatingLabelText='whats this about...?'
                     value={draft.body}
                     multiLine={true}/>
          <RaisedButton type='submit'
                        style={styles.submit}
                        label={isEdit ? 'Save' : 'Publish'}
                        primary={true}/>

          <div style={{ clear: 'both' }}/>
        </form>
    );

    return (
        <AppBar>
          <Paper style={styles.paper}>
            {form}
          </Paper>
        </AppBar>
    );
  }
}

export default connect(state => ({draft: state.draft}))(Draft);
