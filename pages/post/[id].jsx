import { useRouter } from 'next/router';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Default from '../../app/components/layouts/Default/Default';
import PostPage from '../../app/components/templates/PostPage/PostPage';
import { fetchPost } from '../../app/store/modules/posts';

export default function Post() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.posts.post);
  const rounter = useRouter();
  const { id } = rounter.query;

  React.useEffect(() => {
    if (id !== undefined) dispatch(fetchPost(id));
  }, [id]);

  return (
    <Default
      title={`Draggio - ${data?.title?.rendered}`}
      descript={data?.excerpt?.rendered}
    >
      <PostPage />
    </Default>
  );
}
