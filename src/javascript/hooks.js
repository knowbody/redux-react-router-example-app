import { bindActionCreators } from 'redux';
import * as UserActions from './redux/modules/users';
import * as BlogActions from './redux/modules/blogposts';

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
    actions.setDraft(parseInt(params.id, 10));
  };
}
