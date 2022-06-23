import { useState } from 'react';
import { useRequestData } from '../../hooks/useRequestData';
import { URL_BASE } from '../../constants/URL_BASE';
import PostCard from '../PostCard/PostCard';
import { HomeStyled, PostListStyled, ButtonStyled } from './HomeStyled';

const Home = () => {
  const [page, setPage] = useState(2);
  const [url, setUrl] = useState(`${URL_BASE}?_embed&categories=518`);
  const [posts, isLoading, error] = useRequestData(url);
  const [newPosts, setNewPosts] = useState([]);
  const [verifyPosts, setVerifyPosts] = useState(false);

  const loadMore = () => {
    !verifyPosts && setNewPosts(posts);
    setVerifyPosts(true);

    if (page <= 18) {
      setUrl(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`,
      );

      setPage(page + 1);
      const postList = [...newPosts, ...posts];
      setNewPosts(postList);
    }
  };
  const postList =
    posts &&
    posts.map((post) => {
      return <PostCard key={Math.random()} post={post} />;
    });

  const newPostList =
    newPosts &&
    newPosts.map((post) => {
      return <PostCard key={Math.random()} post={post} />;
    });

  return (
    <HomeStyled>
      <h2>BLOG APIKI</h2>
      {!isLoading && error && <p>Erro!</p>}
      {isLoading && <p>Loading...</p>}
      {!verifyPosts && <PostListStyled>{postList}</PostListStyled>}
      {verifyPosts && <PostListStyled>{newPostList}</PostListStyled>}
      {!isLoading && page <= 18 && (
        <ButtonStyled onClick={loadMore}>Carregar mais</ButtonStyled>
      )}
    </HomeStyled>
  );
};

export default Home;
