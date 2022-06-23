import { goHome } from '../../routes/Coodinator';
import { useNavigate, useParams } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import { URL_BASE } from '../../constants/URL_BASE';
import { PostDetailWrapperStyled, PostDetailStyled } from './PostDetailStyled';
import { ButtonStyled } from '../Home/HomeStyled';

const PostDetail = () => {
  const navigate = useNavigate();
  const pathParams = useParams();
  const [post, isLoading, error] = useRequestData(
    `${URL_BASE}/${pathParams.post}`,
  );

  const postDetail = post && (
    <PostDetailStyled>
      <h3>{post.yoast_head_json.title}</h3>
      <img src={post.yoast_head_json.og_image[0].url} />

      <span>{post.yoast_head_json.description}</span>
      <span>{post.content.rendered.stripHTML()}</span>
    </PostDetailStyled>
  );

  String.prototype.stripHTML = function () {
    return this.replace(/<.*?>/g, '');
  };

  return (
    <PostDetailWrapperStyled>
      <ButtonStyled
        onClick={() => {
          goHome(navigate);
        }}
      >
        Home
      </ButtonStyled>
      {postDetail}
    </PostDetailWrapperStyled>
  );
};

export default PostDetail;
