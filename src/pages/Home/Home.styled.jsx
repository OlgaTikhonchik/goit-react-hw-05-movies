import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  // width: 800px;
  margin: 0 auto;
`;
export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  padding: 20px;
  color: #824113;
  text-align: center;

  :hover {
    color: #d38146;
  }
`;

export const ListMovies = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const ItemMovies = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  padding: 5px;
  justify-content: space-evenly;
  font-size: 24px;
`;
export const LinkMovies = styled(Link)`
  text-decoration: none;
  color: #2c1708;

  :hover {
    color: #9c6b47;
  }
`;
