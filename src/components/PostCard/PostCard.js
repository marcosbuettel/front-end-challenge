import { goPostDetailPage } from '../../routes/Coodinator';
import { PostCardStyled } from './PostCardStyled';
import { useNavigate } from 'react-router-dom';

const PostCard = (props) => {
  const navigate = useNavigate();
  return (
    <PostCardStyled>
      <img src={props.post.yoast_head_json.og_image[0].url} />
      <h3>{props.post.yoast_head_json.title}</h3>
      <span>{props.post.yoast_head_json.description}</span>
      <p
        onClick={() => {
          goPostDetailPage(navigate, props.post.id);
        }}
      >
        Leia mais...
      </p>
    </PostCardStyled>
  );
};

export default PostCard;
