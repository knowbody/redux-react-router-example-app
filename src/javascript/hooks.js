import { bindActionCreators } from 'redux';
import * as UserActions from './actions/UserActions';
import * as BlogActions from './actions/BlogActions';

export function bootstrap({ dispatch }) {
  const userActions = bindActionCreators(UserActions, dispatch);
  const blogActions = bindActionCreators(BlogActions, dispatch);

  return () => {
    blogActions.fetchPosts(0, 10);
    userActions.fetchUsers();
  };
}

export function editPost({ dispatch }) {
  const actions = bindActionCreators(BlogActions, dispatch);

  return ({ params }) => {
    actions.editPost(parseInt(params.id, 10));
  };
}
