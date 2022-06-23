import styled from 'styled-components';

export const HomeStyled = styled.div`
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  > h2 {
    padding: 0 20px;
    color: white;
  }

  > p {
    color: white;
  }
`;

export const PostListStyled = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
`;

export const ButtonStyled = styled.button`
  background-color: white;
  color: black;
  border: none;
  font-size: 30px;
  width: fit-content;
  margin: 40px auto;
  cursor: pointer;
  padding: 10px 20px;

  &:hover {
    background-color: black;
    border: 1px solid white;
    color: white;
    transition: 0.5s;
  }
`;
