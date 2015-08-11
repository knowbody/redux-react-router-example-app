import { bindActionCreators } from 'redux';
import * as BlogActions from './actions/BlogActions';

export function editPost(store) {
  const { dispatch } = store;

  return ({ params }) => {
    const actions = bindActionCreators(BlogActions, dispatch);
    actions.editPost(parseInt(params.id, 10));
  };
}
