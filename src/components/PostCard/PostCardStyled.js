import styled from 'styled-components';

export const PostCardStyled = styled.div`
  padding: 20px;
  width: 20%;
  background-color: white;
  margin: 20px auto;
  height: 460px;
  p {
    color: #2397e2;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    width: 40%;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
    height: fit-content;
  }
`;
