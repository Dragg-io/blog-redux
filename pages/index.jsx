import React from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../app/store/modules/posts';
import Default from '../app/components/layouts/Default/Default';
import HomePage from '../app/components/templates/HomePage/HomePage';

export default function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <Default title="Draggio" descript="Página inicial do blog Draggio">
      <HomePage />
    </Default>
  );
}
