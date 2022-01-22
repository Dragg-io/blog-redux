import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../app/store/modules/posts';
import Default from '../app/components/layouts/Default/Default';
import PostsPage from '../app/components/templates/PostsPage/PostsPage';

export default function Posts() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <Default
      title="Draggio - Postagens"
      descript="Listagens de todas postagens do blog Draggio"
    >
      <PostsPage />
    </Default>
  );
}
